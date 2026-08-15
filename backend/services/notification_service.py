from models.notification import Notification
from database.db import db


class NotificationService:

    @staticmethod
    def create(
        title,
        message,
        notification_type="info",
        product_id=None
    ):
        notification = Notification(
            title=title,
            message=message,
            notification_type=notification_type,
            product_id=product_id,
        )

        db.session.add(notification)

        return notification

    @staticmethod
    def low_stock(product):
        """
        Create a low-stock notification only if one does not
        already exist for this product and is still unread.
        """

        if product.quantity <= product.minimum_stock:

            existing_notification = (
                Notification.query
                .filter_by(
                    product_id=product.id,
                    notification_type="warning",
                    is_read=False,
                )
                .first()
            )

            # Do not create another duplicate alert
            if existing_notification:
                return existing_notification

            notification = Notification(
                product_id=product.id,
                title="Low stock alert",
                message=(
                    f"{product.name} is low on stock. "
                    f"Only {product.quantity} units remaining."
                ),
                notification_type="warning",
                is_read=False,
            )

            db.session.add(notification)

            return notification

        return None