from flask import Blueprint, jsonify, request, current_app
from database.db import db

from models.product import Product
from models.stock_movement import StockMovement

from sqlalchemy.exc import IntegrityError

import os
import uuid

from werkzeug.utils import secure_filename

product_bp = Blueprint("products", __name__)


# ==================================================
# GET ALL PRODUCTS
# ==================================================
@product_bp.route("/products", methods=["GET"])
def get_products():

    products = Product.query.all()

    return jsonify(

        [product.to_dict() for product in products]

    )


# ==================================================
# GET ONE PRODUCT
# ==================================================
@product_bp.route("/products/<int:id>", methods=["GET"])
def get_product(id):

    product = Product.query.get_or_404(id)

    return jsonify(product.to_dict())


# ==================================================
# CREATE PRODUCT
# ==================================================
@product_bp.route("/products", methods=["POST"])
def create_product():

    barcode = request.form.get("barcode")

    if barcode:

        existing = Product.query.filter_by(

            barcode=barcode

        ).first()

        if existing:

            return jsonify({

                "message": "Barcode already exists."

            }), 400

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

    product = Product(

        name=request.form["name"],

        sku=request.form["sku"],

        barcode=barcode,

        category=request.form.get("category"),

        supplier=request.form.get("supplier"),

        purchase_price=float(

            request.form.get("purchase_price", 0)

        ),

        selling_price=float(

            request.form.get("selling_price", 0)

        ),

        quantity=int(

            request.form.get("quantity", 0)

        ),

        minimum_stock=int(

            request.form.get("minimum_stock", 0)

        ),

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
    # ==================================================
# UPDATE PRODUCT
# ==================================================
@product_bp.route("/products/<int:id>", methods=["PUT"])
def update_product(id):

    product = Product.query.get_or_404(id)

    barcode = request.form.get("barcode")

    existing = Product.query.filter_by(
        barcode=barcode
    ).first()

    if existing and existing.id != id:

        return jsonify({
            "message": "Barcode already exists."
        }), 400

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

            product.image = f"/uploads/{filename}"

    product.name = request.form.get("name")
    product.sku = request.form.get("sku")
    product.barcode = barcode
    product.category = request.form.get("category")
    product.supplier = request.form.get("supplier")

    product.purchase_price = float(
        request.form.get("purchase_price", 0)
    )

    product.selling_price = float(
        request.form.get("selling_price", 0)
    )

    product.quantity = int(
        request.form.get("quantity", 0)
    )

    product.minimum_stock = int(
        request.form.get("minimum_stock", 0)
    )

    product.description = request.form.get("description")

    try:

        db.session.commit()

        return jsonify(product.to_dict())

    except IntegrityError:

        db.session.rollback()

        return jsonify({
            "message": "Barcode already exists."
        }), 400


# ==================================================
# STOCK IN
# ==================================================
@product_bp.route("/products/<int:id>/stock-in", methods=["POST"])
def stock_in(id):

    product = Product.query.get_or_404(id)

    data = request.get_json()

    quantity = int(data.get("quantity", 0))

    if quantity <= 0:

        return jsonify({
            "message": "Quantity must be greater than zero."
        }), 400

    product.quantity += quantity

    movement = StockMovement(
        product_id=product.id,
        movement_type="Stock In",
        quantity=quantity,
    )

    db.session.add(movement)
    db.session.commit()

    return jsonify(product.to_dict())


# ==================================================
# STOCK OUT
# ==================================================
@product_bp.route("/products/<int:id>/stock-out", methods=["POST"])
def stock_out(id):

    product = Product.query.get_or_404(id)

    data = request.get_json()

    quantity = int(data.get("quantity", 0))

    if quantity <= 0:

        return jsonify({
            "message": "Quantity must be greater than zero."
        }), 400

    if quantity > product.quantity:

        return jsonify({
            "message": "Not enough stock."
        }), 400

    product.quantity -= quantity

    movement = StockMovement(
        product_id=product.id,
        movement_type="Stock Out",
        quantity=quantity,
    )

    db.session.add(movement)
    db.session.commit()

    return jsonify(product.to_dict())
# ==================================================
# DELETE PRODUCT
# ==================================================
@product_bp.route("/products/<int:id>", methods=["DELETE"])
def delete_product(id):

    product = Product.query.get_or_404(id)

    db.session.delete(product)
    db.session.commit()

    return jsonify({
        "message": "Product deleted successfully"
    })


# ==================================================
# LOW STOCK REPORT
# ==================================================
@product_bp.route("/reports/low-stock", methods=["GET"])
def low_stock_products():

    products = Product.query.all()

    low_stock = [

        {

            "id": product.id,

            "name": product.name,

            "sku": product.sku,

            "category": product.category,

            "quantity": product.quantity,

            "minimum_stock": product.minimum_stock,

        }

        for product in products

        if product.quantity <= product.minimum_stock

    ]

    return jsonify(low_stock)


# ==================================================
# STOCK MOVEMENT HISTORY
# ==================================================
@product_bp.route("/stock-movements", methods=["GET"])
def get_stock_movements():

    movements = StockMovement.query.order_by(

        StockMovement.created_at.desc()

    ).all()

    return jsonify(

        [movement.to_dict() for movement in movements]

    )