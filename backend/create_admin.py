from app import app
from database.db import db
from models.user import User

with app.app_context():

    existing = User.query.filter_by(
        email="admin@inventra.com"
    ).first()

    if existing:
        print("Admin already exists.")

    else:

        admin = User(
            full_name="System Administrator",
            email="admin@inventra.com",
            role="admin",
            is_active=True,
        )

        admin.set_password("admin123")

        db.session.add(admin)
        db.session.commit()

        print("Admin account created successfully!")