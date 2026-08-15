from flask import Blueprint, request, jsonify

from flask_jwt_extended import (
    create_access_token,
    jwt_required,
    get_jwt_identity,
)

from models.user import User
from database.db import db

auth_bp = Blueprint("auth", __name__)


# ===========================================
# Login
# ===========================================
@auth_bp.route("/login", methods=["POST"])
def login():

    data = request.get_json()

    email = data.get("email")
    password = data.get("password")

    if not email or not password:

        return jsonify({
            "success": False,
            "message": "Email and password required."
        }), 400

    user = User.query.filter_by(email=email).first()

    if user is None:

        return jsonify({
            "success": False,
            "message": "Invalid email or password."
        }), 401

    if not user.check_password(password):

        return jsonify({
            "success": False,
            "message": "Invalid email or password."
        }), 401

    token = create_access_token(
        identity=str(user.id)
    )

    return jsonify({

        "success": True,

        "token": token,

        "user": user.to_dict()

    })


# ===========================================
# Change Password
# ===========================================
@auth_bp.route("/change-password", methods=["PUT"])
@jwt_required()
def change_password():

    user_id = int(get_jwt_identity())

    user = User.query.get(user_id)

    if not user:

        return jsonify({
            "success": False,
            "message": "User not found."
        }), 404

    data = request.get_json()

    current_password = data.get("current_password")
    new_password = data.get("new_password")
    confirm_password = data.get("confirm_password")

    if not current_password or not new_password or not confirm_password:

        return jsonify({
            "success": False,
            "message": "All password fields are required."
        }), 400

    if not user.check_password(current_password):

        return jsonify({
            "success": False,
            "message": "Current password is incorrect."
        }), 400

    if new_password != confirm_password:

        return jsonify({
            "success": False,
            "message": "New passwords do not match."
        }), 400

    if len(new_password) < 6:

        return jsonify({
            "success": False,
            "message": "Password must be at least 6 characters."
        }), 400

    user.set_password(new_password)

    db.session.commit()

    return jsonify({

        "success": True,

        "message": "Password updated successfully."

    })