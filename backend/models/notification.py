from database.db import db
from datetime import datetime


class Notification(db.Model):

    __tablename__ = "notifications"

    id = db.Column(
        db.Integer,
        primary_key=True
    )

    # Product associated with this notification.
    # Nullable because some notifications, such as
    # "New sale recorded", are not related to one product.
    product_id = db.Column(
        db.Integer,
        db.ForeignKey("products.id"),
        nullable=True
    )

    title = db.Column(
        db.String(200),
        nullable=False
    )

    message = db.Column(
        db.Text,
        nullable=False
    )

    notification_type = db.Column(
        db.String(30),
        default="info"
    )

    is_read = db.Column(
        db.Boolean,
        default=False,
        nullable=False
    )

    created_at = db.Column(
        db.DateTime,
        default=datetime.utcnow,
        nullable=False
    )

    def to_dict(self):

        return {
            "id": self.id,
            "product_id": self.product_id,
            "title": self.title,
            "message": self.message,
            "notification_type": self.notification_type,
            "is_read": self.is_read,
            "created_at": (
                self.created_at.strftime("%d %b %Y %H:%M")
                if self.created_at
                else None
            ),
        }