from flask import Blueprint, request, jsonify

from sqlalchemy import extract, func

from database.db import db

from models.sale import Sale
from models.sale_item import SaleItem
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


# ===========================================
# Monthly Sales Report
# ===========================================
@sale_bp.route("/reports/monthly-sales", methods=["GET"])
def monthly_sales():

    results = (
        db.session.query(
            extract("month", Sale.created_at).label("month"),
            func.sum(Sale.grand_total).label("sales"),
        )
        .group_by(extract("month", Sale.created_at))
        .order_by(extract("month", Sale.created_at))
        .all()
    )

    months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ]

    data = []

    for row in results:

        data.append({
            "month": months[int(row.month) - 1],
            "sales": float(row.sales or 0),
        })

    return jsonify(data)
# ===========================================
# Top Selling Products
# ===========================================
@sale_bp.route("/reports/top-products", methods=["GET"])
def top_products():

    results = (
        db.session.query(
            SaleItem.product_name,
            func.sum(SaleItem.quantity).label("sold"),
        )
        .group_by(SaleItem.product_name)
        .order_by(func.sum(SaleItem.quantity).desc())
        .limit(5)
        .all()
    )

    return jsonify([
        {
            "product": row.product_name,
            "sold": int(row.sold),
        }
        for row in results
    ])