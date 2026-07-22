from flask import Blueprint, jsonify, request, current_app
from database.db import db
from models.product import Product

from sqlalchemy.exc import IntegrityError

import os
import uuid
from werkzeug.utils import secure_filename

product_bp = Blueprint("products", __name__)


# ==========================
# Get All Products
# ==========================
@product_bp.route("/products", methods=["GET"])
def get_products():
    products = Product.query.all()
    return jsonify([product.to_dict() for product in products])

@product_bp.route("/products/<int:id>", methods=["GET"])
def get_product(id):

    product = Product.query.get_or_404(id)

    return jsonify(product.to_dict())


# ==========================
# Create Product
# ==========================
@product_bp.route("/products", methods=["POST"])
def create_product():

    # --------------------------
    # Check duplicate barcode
    # --------------------------
    barcode = request.form.get("barcode")

    if barcode:
        existing = Product.query.filter_by(barcode=barcode).first()

        if existing:
            return jsonify({
                "message": "Barcode already exists."
            }), 400

    # --------------------------
    # Upload image
    # --------------------------
    image_path = None

    if "image" in request.files:
        image = request.files["image"]

        if image.filename != "":
            filename = (
                f"{uuid.uuid4().hex}_"
                f"{secure_filename(image.filename)}"
            )

            image.save(
                os.path.join(
                    current_app.config["UPLOAD_FOLDER"],
                    filename,
                )
            )

            image_path = f"/uploads/{filename}"

    # --------------------------
    # Create product
    # --------------------------
    product = Product(
        name=request.form["name"],
        sku=request.form["sku"],
        barcode=barcode,
        category=request.form.get("category"),
        supplier=request.form.get("supplier"),
        purchase_price=float(request.form.get("purchase_price", 0)),
        selling_price=float(request.form.get("selling_price", 0)),
        quantity=int(request.form.get("quantity", 0)),
        minimum_stock=int(request.form.get("minimum_stock", 0)),
        description=request.form.get("description"),
        image=image_path,
    )

    try:
        db.session.add(product)
        db.session.commit()

        return jsonify(product.to_dict()), 201

    except IntegrityError:
        db.session.rollback()

        return jsonify({
            "message": "Barcode already exists."
        }), 400


# ==========================
# Update Product
# ==========================
@product_bp.route("/products/<int:id>", methods=["PUT"])
def update_product(id):

    product = Product.query.get_or_404(id)

    data = request.get_json()

    product.name = data["name"]
    product.sku = data["sku"]
    product.barcode = data.get("barcode")
    product.category = data.get("category")
    product.supplier = data.get("supplier")
    product.purchase_price = data.get("purchase_price", 0)
    product.selling_price = data.get("selling_price", 0)
    product.quantity = data.get("quantity", 0)
    product.minimum_stock = data.get("minimum_stock", 0)
    product.description = data.get("description")
    product.image = data.get("image")

    try:
        db.session.commit()
        return jsonify(product.to_dict())

    except IntegrityError:
        db.session.rollback()

        return jsonify({
            "message": "Barcode already exists."
        }), 400


# ==========================
# Delete Product
# ==========================
@product_bp.route("/products/<int:id>", methods=["DELETE"])
def delete_product(id):

    product = Product.query.get_or_404(id)

    db.session.delete(product)
    db.session.commit()

    return jsonify({
        "message": "Product deleted successfully"
    })



# ==========================
# Low Stock Report
# ==========================
@product_bp.route("/reports/low-stock", methods=["GET"])
def low_stock_products():

    products = Product.query.all()

    low_stock = [
        {
            "id": p.id,
            "name": p.name,
            "sku": p.sku,
            "quantity": p.quantity,
            "minimum_stock": p.minimum_stock,
            "category": p.category,
        }
        for p in products
        if p.quantity <= p.minimum_stock
    ]

    return jsonify(low_stock)