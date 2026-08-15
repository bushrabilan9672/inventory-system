from flask import Blueprint, jsonify
from models.notification import Notification
from database.db import db


notification_bp = Blueprint("notifications", __name__)


# Get all notifications
@notification_bp.route("/notifications", methods=["GET"])
def get_notifications():

    notifications = (
        Notification.query
        .order_by(Notification.created_at.desc())
        .all()
    )

    return jsonify([
        notification.to_dict()
        for notification in notifications
    ])


# Mark notification as read
@notification_bp.route("/notifications/<int:notification_id>/read", methods=["PUT"])
def mark_as_read(notification_id):

    notification = Notification.query.get_or_404(notification_id)

    notification.is_read = True

    db.session.commit()

    return jsonify(notification.to_dict())


# Delete notification
@notification_bp.route("/notifications/<int:notification_id>", methods=["DELETE"])
def delete_notification(notification_id):

    notification = Notification.query.get_or_404(notification_id)

    db.session.delete(notification)

    db.session.commit()

    return jsonify({
        "message": "Notification deleted successfully"
    })


# Mark all notifications as read
@notification_bp.route("/notifications/read-all", methods=["PUT"])
def mark_all_as_read():

    Notification.query.update({
        Notification.is_read: True
    })

    db.session.commit()

    return jsonify({
        "message": "All notifications marked as read"
    })
