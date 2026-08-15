from flask import Blueprint, jsonify, request

from services.settings_service import SettingsService

settings_bp = Blueprint("settings", __name__)


# ==========================================
# Get Settings
# ==========================================

@settings_bp.route("/settings", methods=["GET"])
def get_settings():

    return jsonify(
        SettingsService.get_settings()
    )


# ==========================================
# Update Settings
# ==========================================

@settings_bp.route("/settings", methods=["PUT"])
def update_settings():

    data = request.get_json()

    result = SettingsService.update_settings(data)

    return jsonify(result)