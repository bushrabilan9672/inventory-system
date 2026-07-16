from flask import Blueprint, jsonify, request
from database.db import db
from models.customer import Customer

customer_bp = Blueprint("customers", __name__)


# ==========================
# Get All Customers
# ==========================
@customer_bp.route("/customers", methods=["GET"])
def get_customers():
    customers = Customer.query.order_by(Customer.id.desc()).all()

    return jsonify([
        customer.to_dict()
        for customer in customers
    ])


# ==========================
# Create Customer
# ==========================
@customer_bp.route("/customers", methods=["POST"])
def create_customer():

    data = request.get_json()

    customer = Customer(
        full_name=data["full_name"],
        phone=data.get("phone"),
        email=data.get("email"),
        address=data.get("address"),
        company=data.get("company"),
        customer_type=data.get("customer_type"),
        tax_number=data.get("tax_number"),
        notes=data.get("notes"),
    )

    db.session.add(customer)
    db.session.commit()

    return jsonify(customer.to_dict()), 201


# ==========================
# Update Customer
# ==========================
@customer_bp.route("/customers/<int:id>", methods=["PUT"])
def update_customer(id):

    customer = Customer.query.get_or_404(id)

    data = request.get_json()

    customer.full_name = data["full_name"]
    customer.phone = data.get("phone")
    customer.email = data.get("email")
    customer.address = data.get("address")
    customer.company = data.get("company")
    customer.customer_type = data.get("customer_type")
    customer.tax_number = data.get("tax_number")
    customer.notes = data.get("notes")

    db.session.commit()

    return jsonify(customer.to_dict())


# ==========================
# Delete Customer
# ==========================
@customer_bp.route("/customers/<int:id>", methods=["DELETE"])
def delete_customer(id):

    customer = Customer.query.get_or_404(id)

    db.session.delete(customer)
    db.session.commit()

    return jsonify({
        "message": "Customer deleted successfully"
    })