from flask import Blueprint, jsonify, request
from database.db import db
from models.supplier import Supplier

supplier_bp = Blueprint("suppliers", __name__)


# ==========================
# Get All Suppliers
# ==========================
@supplier_bp.route("/suppliers", methods=["GET"])
def get_suppliers():
    suppliers = Supplier.query.all()
    return jsonify([supplier.to_dict() for supplier in suppliers])


# ==========================
# Add Supplier
# ==========================
@supplier_bp.route("/suppliers", methods=["POST"])
def create_supplier():
    data = request.get_json()

    supplier = Supplier(
        company_name=data["company_name"],
        contact_person=data.get("contact_person"),
        phone=data.get("phone"),
        email=data.get("email"),
        address=data.get("address"),
        notes=data.get("notes"),
    )

    db.session.add(supplier)
    db.session.commit()

    return jsonify(supplier.to_dict()), 201


# ==========================
# Update Supplier
# ==========================
@supplier_bp.route("/suppliers/<int:id>", methods=["PUT"])
def update_supplier(id):
    supplier = Supplier.query.get_or_404(id)

    data = request.get_json()

    supplier.company_name = data["company_name"]
    supplier.contact_person = data.get("contact_person")
    supplier.phone = data.get("phone")
    supplier.email = data.get("email")
    supplier.address = data.get("address")
    supplier.notes = data.get("notes")

    db.session.commit()

    return jsonify(supplier.to_dict())


# ==========================
# Delete Supplier
# ==========================
@supplier_bp.route("/suppliers/<int:id>", methods=["DELETE"])
def delete_supplier(id):
    supplier = Supplier.query.get_or_404(id)

    db.session.delete(supplier)
    db.session.commit()

    return jsonify({
        "message": "Supplier deleted successfully"
    })