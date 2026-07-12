import os

BASE_DIR = os.path.abspath(os.path.dirname(__file__))

class Config:
    SECRET_KEY = "smart-inventory-secret-key"

    SQLALCHEMY_DATABASE_URI = (
        f"sqlite:///{os.path.join(BASE_DIR, 'database', 'inventory.db')}"
    )

    SQLALCHEMY_TRACK_MODIFICATIONS = False