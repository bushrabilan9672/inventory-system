from database.db import db
from datetime import datetime


class Sale(db.Model):
    __tablename__ = "sales"

    # ==========================
    # Primary Key
    # ==========================
    id = db.Column(db.Integer, primary_key=True)

    # ==========================
    # Invoice Information
    # ==========================
    invoice_number = db.Column(
        db.String(30),
        unique=True,
        nullable=False,
        index=True,
    )

    # ==========================
    # Customer
    # ==========================
    customer_id = db.Column(
        db.Integer,
        db.ForeignKey("customers.id"),
        nullable=False,
    )

    customer = db.relationship(
    "Customer",
    back_populates="sales",
)
    

    # ==========================
    # Financial Information
    # ==========================
    subtotal = db.Column(
        db.Float,
        nullable=False,
        default=0,
    )

    discount = db.Column(
        db.Float,
        nullable=False,
        default=0,
    )

    tax = db.Column(
        db.Float,
        nullable=False,
        default=0,
    )

    grand_total = db.Column(
        db.Float,
        nullable=False,
        default=0,
    )

    # ==========================
    # Status
    # ==========================
    payment_status = db.Column(
        db.String(20),
        nullable=False,
        default="Pending",
    )

    sale_status = db.Column(
        db.String(20),
        nullable=False,
        default="Completed",
    )

    # ==========================
    # Dates
    # ==========================
    created_at = db.Column(
        db.DateTime,
        default=datetime.utcnow,
    )

    updated_at = db.Column(
        db.DateTime,
        default=datetime.utcnow,
        onupdate=datetime.utcnow,
    )

    # ==========================
    # Relationships
    # ==========================
    sale_items = db.relationship(
        "SaleItem",
        backref="sale",
        lazy=True,
        cascade="all, delete-orphan",
    )

    payments = db.relationship(
        "Payment",
        backref="sale",
        lazy=True,
        cascade="all, delete-orphan",
    )

    # ==========================
    # Convert to Dictionary
    # ==========================
    def to_dict(self):
        return {
            "id": self.id,
            "invoice_number": self.invoice_number,
            "customer_id": self.customer_id,
            "customer_name": (
                self.customer.name
                if self.customer
                else None
            ),
            "subtotal": self.subtotal,
            "discount": self.discount,
            "tax": self.tax,
            "grand_total": self.grand_total,
            "payment_status": self.payment_status,
            "sale_status": self.sale_status,
            "created_at": self.created_at.strftime(
                "%Y-%m-%d %H:%M:%S"
            ),
            "updated_at": self.updated_at.strftime(
                "%Y-%m-%d %H:%M:%S"
            ),
        }

    def __repr__(self):
        return (
            f"<Sale {self.invoice_number}>"
        )