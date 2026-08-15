from database.db import db


class Setting(db.Model):

    __tablename__ = "settings"

    id = db.Column(
        db.Integer,
        primary_key=True
    )

    business_name = db.Column(
        db.String(200),
        default="Smart Inventory System"
    )

    business_email = db.Column(
        db.String(120)
    )

    business_phone = db.Column(
        db.String(50)
    )

    business_address = db.Column(
        db.Text
    )

    business_website = db.Column(
        db.String(200)
    )

    logo = db.Column(
        db.String(255)
    )

    currency = db.Column(
        db.String(10),
        default="KES"
    )

    vat = db.Column(
        db.Float,
        default=16
    )

    low_stock_threshold = db.Column(
        db.Integer,
        default=10
    )

    timezone = db.Column(
        db.String(100),
        default="Africa/Nairobi"
    )

    date_format = db.Column(
        db.String(50),
        default="DD/MM/YYYY"
    )

    theme = db.Column(
        db.String(20),
        default="light"
    )

    primary_color = db.Column(
        db.String(30),
        default="emerald"
    )

    sidebar_style = db.Column(
        db.String(20),
        default="expanded"
    )

    layout_density = db.Column(
        db.String(20),
        default="comfortable"
    )

    def to_dict(self):

        return {

            "id": self.id,

            "business_name": self.business_name,

            "business_email": self.business_email,

            "business_phone": self.business_phone,

            "business_address": self.business_address,

            "business_website": self.business_website,

            "logo": self.logo,

            "currency": self.currency,

            "vat": self.vat,

            "low_stock_threshold": self.low_stock_threshold,

            "timezone": self.timezone,

            "date_format": self.date_format,

            "theme": self.theme,

            "primary_color": self.primary_color,

            "sidebar_style": self.sidebar_style,

            "layout_density": self.layout_density,

        }