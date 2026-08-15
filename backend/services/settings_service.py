from database.db import db

from models.setting import Setting


class SettingsService:

    @staticmethod
    def get_settings():

        settings = Setting.query.first()

        if not settings:

            settings = Setting()

            db.session.add(settings)

            db.session.commit()

        return settings.to_dict()


    @staticmethod
    def update_settings(data):

        settings = Setting.query.first()

        if not settings:

            settings = Setting()

            db.session.add(settings)

        settings.business_name = data.get(
            "business_name",
            settings.business_name,
        )

        settings.business_email = data.get(
            "business_email",
            settings.business_email,
        )

        settings.business_phone = data.get(
            "business_phone",
            settings.business_phone,
        )

        settings.business_address = data.get(
            "business_address",
            settings.business_address,
        )

        settings.business_website = data.get(
            "business_website",
            settings.business_website,
        )

        settings.currency = data.get(
            "currency",
            settings.currency,
        )

        settings.vat = data.get(
            "vat",
            settings.vat,
        )

        settings.low_stock_threshold = data.get(
            "low_stock_threshold",
            settings.low_stock_threshold,
        )

        settings.timezone = data.get(
            "timezone",
            settings.timezone,
        )

        settings.date_format = data.get(
            "date_format",
            settings.date_format,
        )

        settings.theme = data.get(
            "theme",
            settings.theme,
        )

        settings.primary_color = data.get(
            "primary_color",
            settings.primary_color,
        )

        settings.sidebar_style = data.get(
            "sidebar_style",
            settings.sidebar_style,
        )

        settings.layout_density = data.get(
            "layout_density",
            settings.layout_density,
        )

        db.session.commit()

        return {

            "success": True,

            "message": "Settings updated successfully.",

            "settings": settings.to_dict(),

        }