from flask import Blueprint, jsonify
from sqlalchemy import func

from database.db import db

from models.product import Product
from models.sale import Sale
from models.customer import Customer
from models.stock_movement import StockMovement

dashboard_bp = Blueprint("dashboard", __name__)


# ==========================================
# Dashboard Statistics
# ==========================================
@dashboard_bp.route("/dashboard", methods=["GET"])
def dashboard():

    # ==========================
    # Inventory
    # ==========================

    total_products = Product.query.count()

    total_stock = (
        db.session.query(func.sum(Product.quantity)).scalar() or 0
    )

    low_stock = Product.query.filter(
        Product.quantity <= 10,
        Product.quantity > 0
    ).count()

    out_of_stock = Product.query.filter(
        Product.quantity == 0
    ).count()

    # ==========================
    # Sales
    # ==========================

    total_revenue = (
        db.session.query(func.sum(Sale.grand_total)).scalar() or 0
    )

    total_orders = Sale.query.count()

    # ==========================
    # Customers
    # ==========================

    total_customers = Customer.query.count()

    # ==========================
    # Recent Sales
    # ==========================

    recent_sales = (
        Sale.query
        .order_by(Sale.created_at.desc())
        .limit(5)
        .all()
    )

    # ==========================
    # Low Stock Products
    # ==========================

    low_stock_products = (
        Product.query
        .filter(
            Product.quantity <= 10,
            Product.quantity > 0
        )
        .order_by(Product.quantity.asc())
        .limit(5)
        .all()
    )

    # ==========================
    # Sales Chart
    # ==========================

    sales_chart = [
        {
            "date": sale.created_at.strftime("%d %b"),
            "sales": float(sale.grand_total)
        }
        for sale in (
            Sale.query
            .order_by(Sale.created_at.asc())
            .limit(6)
            .all()
        )
    ]

    # ==========================
    # Inventory Chart
    # ==========================

    inventory_chart = [
        {
            "product": product.name,
            "stock": product.quantity
        }
        for product in (
            Product.query
            .order_by(Product.quantity.desc())
            .limit(8)
            .all()
        )
    ]

    # ==========================
    # Recent Activity
    # ==========================

    recent_activity = (
        StockMovement.query
        .order_by(StockMovement.created_at.desc())
        .limit(8)
        .all()
    )

    # ==========================
    # Response
    # ==========================

    return jsonify({

        "kpis": {

            "revenue": total_revenue,

            "products": total_products,

            "orders": total_orders,

            "customers": total_customers,

        },

        "sales_chart": sales_chart,

        "inventory_chart": inventory_chart,

        "inventory_summary": {

            "total_products": total_products,

            "total_stock": total_stock,

            "low_stock": low_stock,

            "out_of_stock": out_of_stock,

        },

        "recent_sales": [
            sale.to_dict()
            for sale in recent_sales
        ],

        "low_stock_products": [
            product.to_dict()
            for product in low_stock_products
        ],

        "recent_activity": [
            activity.to_dict()
            for activity in recent_activity
        ],

    })