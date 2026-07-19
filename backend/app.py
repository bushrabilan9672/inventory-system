from flask import Flask, send_from_directory
from flask_cors import CORS
from models.supplier import Supplier
from routes.supplier_routes import supplier_bp
from models.customer import Customer
from routes.customer_routes import customer_bp
from flask_migrate import Migrate
from models.sale import Sale
from models.sale_item import SaleItem
from models.payment import Payment
from models.sale import Sale
from models.sale_item import SaleItem
from models.payment import Payment

from routes.sale_routes import sale_bp

import os

from config import Config
from database.db import db
from models.product import Product
from routes.product_routes import product_bp

app = Flask(__name__)
app.config.from_object(Config)

# Upload folder
app.config["UPLOAD_FOLDER"] = "uploads"

CORS(app)

db.init_app(app)
migrate = Migrate(app, db)
app.register_blueprint(product_bp)
app.register_blueprint(supplier_bp)
app.register_blueprint(customer_bp)
app.register_blueprint(sale_bp)

@app.route("/")
def home():
    return {
        "message": "Welcome to Smart Inventory Management System API!"
    }


# Serve uploaded images
@app.route("/uploads/<filename>")
def uploaded_file(filename):
    return send_from_directory(
        app.config["UPLOAD_FOLDER"],
        filename,
    )


with app.app_context():
    os.makedirs(app.config["UPLOAD_FOLDER"], exist_ok=True)
    


if __name__ == "__main__":
    app.run(debug=True)