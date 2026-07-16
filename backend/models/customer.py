from database.db import db
from datetime import datetime


class Customer(db.Model):
    __tablename__ = "customers"

    id = db.Column(db.Integer, primary_key=True)

    full_name = db.Column(db.String(120), nullable=False)

    phone = db.Column(db.String(20), unique=True)

    email = db.Column(db.String(120), unique=True)

    address = db.Column(db.Text)

    company = db.Column(db.String(120))

    customer_type = db.Column(
        db.String(30),
        default="Walk-in"
    )

    tax_number = db.Column(db.String(50))

    notes = db.Column(db.Text)

    total_orders = db.Column(
        db.Integer,
        default=0
    )

    total_spent = db.Column(
        db.Float,
        default=0.0
    )

    outstanding_balance = db.Column(
        db.Float,
        default=0.0
    )

    created_at = db.Column(
        db.DateTime,
        default=datetime.utcnow
    )

    updated_at = db.Column(
        db.DateTime,
        default=datetime.utcnow,
        onupdate=datetime.utcnow
    )

    def to_dict(self):
        return {
            "id": self.id,
            "full_name": self.full_name,
            "phone": self.phone,
            "email": self.email,
            "address": self.address,
            "company": self.company,
            "customer_type": self.customer_type,
            "tax_number": self.tax_number,
            "notes": self.notes,
            "total_orders": self.total_orders,
            "total_spent": self.total_spent,
            "outstanding_balance": self.outstanding_balance,
            "created_at": self.created_at.isoformat() if self.created_at else None,
            "updated_at": self.updated_at.isoformat() if self.updated_at else None,
        }