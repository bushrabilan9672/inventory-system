from flask import Flask
from flask_cors import CORS

from config import Config
from database.db import db
from models.product import Product
from routes.product_routes import product_bp

app = Flask(__name__)
app.config.from_object(Config)

CORS(app)

db.init_app(app)
app.register_blueprint(product_bp)


@app.route("/")
def home():
    return {
        "message": "Welcome to Smart Inventory Management System API!"
    }


with app.app_context():
    db.create_all()


if __name__ == "__main__":
    app.run(debug=True)