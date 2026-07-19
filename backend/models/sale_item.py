from database.db import db


class SaleItem(db.Model):
    __tablename__ = "sale_items"

    # =====================================
    # Primary Key
    # =====================================
    id = db.Column(
        db.Integer,
        primary_key=True,
    )

    # =====================================
    # Relationships
    # =====================================
    sale_id = db.Column(
        db.Integer,
        db.ForeignKey("sales.id"),
        nullable=False,
        index=True,
    )

    product_id = db.Column(
        db.Integer,
        db.ForeignKey("products.id"),
        nullable=False,
        index=True,
    )

    product = db.relationship(
        "Product",
        backref=db.backref(
            "sale_items",
            lazy=True,
        ),
    )

    # =====================================
    # Product Snapshot
    # =====================================
    product_name = db.Column(
        db.String(200),
        nullable=False,
    )

    sku = db.Column(
        db.String(100),
    )

    barcode = db.Column(
        db.String(100),
    )

    # =====================================
    # Pricing
    # =====================================
    quantity = db.Column(
        db.Integer,
        nullable=False,
        default=1,
    )

    unit_price = db.Column(
        db.Float,
        nullable=False,
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

    total = db.Column(
        db.Float,
        nullable=False,
    )

    # =====================================
    # Convert to Dictionary
    # =====================================
    def to_dict(self):
        return {
            "id": self.id,
            "sale_id": self.sale_id,
            "product_id": self.product_id,
            "product_name": self.product_name,
            "sku": self.sku,
            "barcode": self.barcode,
            "quantity": self.quantity,
            "unit_price": self.unit_price,
            "discount": self.discount,
            "tax": self.tax,
            "total": self.total,
        }

    def __repr__(self):
        return (
            f"<SaleItem {self.product_name}>"
        )