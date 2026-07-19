from flask import Blueprint, request, jsonify

from models.sale import Sale
from services.sale_service import SaleService

sale_bp = Blueprint("sales", __name__)


# ===========================================
# Create Sale
# ===========================================
@sale_bp.route("/sales", methods=["POST"])
def create_sale():

    data = request.get_json()

    result = SaleService.create_sale(data)

    if result["success"]:
        return jsonify(result), 201

    return jsonify(result), 400


# ===========================================
# Get All Sales
# ===========================================
@sale_bp.route("/sales", methods=["GET"])
def get_sales():

    sales = Sale.query.order_by(
        Sale.created_at.desc()
    ).all()

    return jsonify([
        sale.to_dict()
        for sale in sales
    ])


# ===========================================
# Get One Sale
# ===========================================
@sale_bp.route("/sales/<int:id>", methods=["GET"])
def get_sale(id):

    sale = Sale.query.get_or_404(id)

    return jsonify(
        sale.to_dict()
    )


# ===========================================
# Delete Sale
# ===========================================
@sale_bp.route("/sales/<int:id>", methods=["DELETE"])
def delete_sale(id):

    sale = Sale.query.get_or_404(id)

    return SaleService.delete_sale(sale)