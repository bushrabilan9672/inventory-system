from flask import Blueprint, request, jsonify

from flask_jwt_extended import create_access_token

from models.user import User

from database.db import db

auth_bp = Blueprint("auth", __name__)


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