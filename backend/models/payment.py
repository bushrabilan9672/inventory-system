from database.db import db
from datetime import datetime


class Payment(db.Model):
    __tablename__ = "payments"

    # =====================================
    # Primary Key
    # =====================================
    id = db.Column(
        db.Integer,
        primary_key=True,
    )

    # =====================================
    # Sale Relationship
    # =====================================
    sale_id = db.Column(
        db.Integer,
        db.ForeignKey("sales.id"),
        nullable=False,
        index=True,
    )

    # =====================================
    # Payment Information
    # =====================================
    payment_method = db.Column(
        db.String(30),
        nullable=False,
    )

    amount = db.Column(
        db.Float,
        nullable=False,
    )

    transaction_reference = db.Column(
        db.String(100),
        unique=True,
    )

    payment_status = db.Column(
        db.String(20),
        default="Completed",
    )

    notes = db.Column(
        db.Text,
    )

    paid_at = db.Column(
        db.DateTime,
        default=datetime.utcnow,
    )

    # =====================================
    # Convert To Dictionary
    # =====================================
    def to_dict(self):
        return {
            "id": self.id,
            "sale_id": self.sale_id,
            "payment_method": self.payment_method,
            "amount": self.amount,
            "transaction_reference": self.transaction_reference,
            "payment_status": self.payment_status,
            "notes": self.notes,
            "paid_at": (
                self.paid_at.isoformat()
                if self.paid_at
                else None
            ),
        }

    def __repr__(self):
        return (
            f"<Payment {self.payment_method}>"
        )