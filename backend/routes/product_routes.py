from flask import Blueprint, jsonify
from models.product import Product

product_bp = Blueprint("products", __name__)


@product_bp.route("/products", methods=["GET"])
def get_products():
    products = Product.query.all()

    return jsonify(
        [product.to_dict() for product in products]
    )