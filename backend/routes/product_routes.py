from flask import Blueprint, jsonify, request
from database.db import db
from models.product import Product

product_bp = Blueprint("products", __name__)


@product_bp.route("/products", methods=["GET"])
def get_products():
    products = Product.query.all()
    return jsonify([product.to_dict() for product in products])


@product_bp.route("/products", methods=["POST"])
def create_product():
    data = request.get_json()

    product = Product(
        name=data["name"],
        sku=data["sku"],
        barcode=data.get("barcode"),
        category=data.get("category"),
        supplier=data.get("supplier"),
        purchase_price=data.get("purchase_price", 0),
        selling_price=data.get("selling_price", 0),
        quantity=data.get("quantity", 0),
        minimum_stock=data.get("minimum_stock", 0),
        description=data.get("description"),
        image=data.get("image"),
    )

    db.session.add(product)
    db.session.commit()

    return jsonify(product.to_dict()), 201


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

    db.session.commit()

    return jsonify(product.to_dict())

@product_bp.route("/products/<int:id>", methods=["DELETE"])
def delete_product(id):
    product = Product.query.get_or_404(id)

    db.session.delete(product)
    db.session.commit()

    return jsonify({
        "message": "Product deleted successfully"
    })