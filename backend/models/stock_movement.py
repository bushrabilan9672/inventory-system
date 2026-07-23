from database.db import db
from datetime import datetime

class StockMovement(db.Model):

    __tablename__ = "stock_movements"

    id = db.Column(db.Integer, primary_key=True)

    product_id = db.Column(
        db.Integer,
        db.ForeignKey("products.id"),
        nullable=False
    )

    movement_type = db.Column(
        db.String(20),
        nullable=False
    )

    quantity = db.Column(
        db.Integer,
        nullable=False
    )

    created_at = db.Column(
        db.DateTime,
        default=datetime.utcnow
    )

    product = db.relationship(
        "Product",
        backref="movements"
    )

    def to_dict(self):

        return {

            "id": self.id,

            "product_id": self.product_id,

            "product_name": self.product.name,

            "movement_type": self.movement_type,

            "quantity": self.quantity,

            "created_at": self.created_at.strftime("%Y-%m-%d %H:%M:%S"),

        }