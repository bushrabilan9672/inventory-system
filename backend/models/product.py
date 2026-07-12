from database.db import db


class Product(db.Model):
    __tablename__ = "products"

    id = db.Column(db.Integer, primary_key=True)

    name = db.Column(db.String(150), nullable=False)

    sku = db.Column(db.String(100), unique=True, nullable=False)

    barcode = db.Column(db.String(100), unique=True)

    category = db.Column(db.String(100))

    supplier = db.Column(db.String(150))

    purchase_price = db.Column(db.Float, nullable=False)

    selling_price = db.Column(db.Float, nullable=False)

    quantity = db.Column(db.Integer, default=0)

    minimum_stock = db.Column(db.Integer, default=0)

    description = db.Column(db.Text)

    image = db.Column(db.String(255))

    created_at = db.Column(
        db.DateTime,
        server_default=db.func.now()
    )

    updated_at = db.Column(
        db.DateTime,
        server_default=db.func.now(),
        onupdate=db.func.now()
    )

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "sku": self.sku,
            "barcode": self.barcode,
            "category": self.category,
            "supplier": self.supplier,
            "purchase_price": self.purchase_price,
            "selling_price": self.selling_price,
            "quantity": self.quantity,
            "minimum_stock": self.minimum_stock,
            "description": self.description,
            "image": self.image,
        }