from database.db import db
from datetime import datetime


class Customer(db.Model):
    __tablename__ = "customers"

    # =====================================
    # Primary Key
    # =====================================
    id = db.Column(db.Integer, primary_key=True)

    # =====================================
    # Customer Information
    # =====================================
    full_name = db.Column(
        db.String(120),
        nullable=False,
        index=True,
    )

    phone = db.Column(
        db.String(20),
        unique=True,
        index=True,
    )

    email = db.Column(
        db.String(120),
        unique=True,
        index=True,
    )

    address = db.Column(db.Text)

    company = db.Column(db.String(120))

    customer_type = db.Column(
        db.String(30),
        default="Walk-in",
        index=True,
    )

    tax_number = db.Column(db.String(50))

    notes = db.Column(db.Text)

    # =====================================
    # Business Information
    # =====================================
    total_orders = db.Column(
        db.Integer,
        default=0,
        nullable=False,
    )

    total_spent = db.Column(
        db.Float,
        default=0.0,
        nullable=False,
    )

    outstanding_balance = db.Column(
        db.Float,
        default=0.0,
        nullable=False,
    )

    credit_limit = db.Column(
        db.Float,
        default=0.0,
        nullable=False,
    )

    is_active = db.Column(
        db.Boolean,
        default=True,
        nullable=False,
    )

    # =====================================
    # Dates
    # =====================================
    created_at = db.Column(
        db.DateTime,
        default=datetime.utcnow,
    )

    updated_at = db.Column(
        db.DateTime,
        default=datetime.utcnow,
        onupdate=datetime.utcnow,
    )

    # =====================================
    # Relationships
    # =====================================
    sales = db.relationship(
        "Sale",
        back_populates="customer",
        lazy=True,
        cascade="all",
    )

    # =====================================
    # Convert to Dictionary
    # =====================================
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
            "credit_limit": self.credit_limit,
            "is_active": self.is_active,
            "created_at": (
                self.created_at.isoformat()
                if self.created_at
                else None
            ),
            "updated_at": (
                self.updated_at.isoformat()
                if self.updated_at
                else None
            ),
        }

    def __repr__(self):
        return f"<Customer {self.full_name}>"