from datetime import datetime

import bcrypt

from database.db import db


class User(db.Model):

    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)

    full_name = db.Column(db.String(150), nullable=False)

    email = db.Column(db.String(120), unique=True, nullable=False)

    password = db.Column(db.String(255), nullable=False)

    role = db.Column(
        db.String(50),
        nullable=False,
        default="staff",
    )

    is_active = db.Column(
        db.Boolean,
        default=True,
    )

    created_at = db.Column(
        db.DateTime,
        default=datetime.utcnow,
    )

    def set_password(self, password):

        hashed = bcrypt.hashpw(
            password.encode("utf-8"),
            bcrypt.gensalt(),
        )

        self.password = hashed.decode("utf-8")

    def check_password(self, password):

        return bcrypt.checkpw(
            password.encode("utf-8"),
            self.password.encode("utf-8"),
        )

    def to_dict(self):

        return {
            "id": self.id,
            "full_name": self.full_name,
            "email": self.email,
            "role": self.role,
            "is_active": self.is_active,
        }