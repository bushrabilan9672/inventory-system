from flask import Blueprint, jsonify
from sqlalchemy import func

from database.db import db

from models.product import Product
from models.sale import Sale

dashboard_bp = Blueprint("dashboard", __name__)


# ==========================================
# Dashboard Statistics
# ==========================================
@dashboard_bp.route("/dashboard", methods=["GET"])
def dashboard():

    total_products = Product.query.count()

    total_stock = db.session.query(
        func.sum(Product.quantity)
    ).scalar() or 0

    low_stock = Product.query.filter(
        Product.quantity <= 10,
        Product.quantity > 0,
    ).count()

    out_of_stock = Product.query.filter(
        Product.quantity == 0
    ).count()

    total_sales = db.session.query(
        func.sum(Sale.grand_total)
    ).scalar() or 0

    recent_sales = (
        Sale.query
        .order_by(Sale.created_at.desc())
        .limit(5)
        .all()
    )

    low_stock_products = (
        Product.query
        .filter(
            Product.quantity <= 10,
            Product.quantity > 0,
        )
        .order_by(Product.quantity.asc())
        .limit(5)
        .all()
    )

    return jsonify({

        "inventory_summary": {

            "total_products": total_products,

            "total_stock": total_stock,

            "low_stock": low_stock,

            "out_of_stock": out_of_stock,

        },

        "total_sales": total_sales,

        "recent_sales": [

            sale.to_dict()

            for sale in recent_sales

        ],

        "low_stock_products": [

            product.to_dict()

            for product in low_stock_products

        ],

    })