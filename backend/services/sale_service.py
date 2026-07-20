from database.db import db

from models.sale import Sale
from models.sale_item import SaleItem
from models.payment import Payment
from models.product import Product
from models.customer import Customer

from utils.invoice import generate_invoice_number
from utils.logger import logger


class SaleService:

    @staticmethod
    def create_sale(data):

        try:

            customer = Customer.query.get(data["customer_id"])

            if not customer:
                return {
                    "success": False,
                    "message": "Customer not found."
                }

            invoice_number = generate_invoice_number()

            sale = Sale(
                invoice_number=invoice_number,
                customer_id=customer.id,
                payment_status=data.get("payment_status", "Completed"),
                discount=data.get("discount", 0),
                tax=data.get("tax", 0),
            )

            db.session.add(sale)
            db.session.flush()

            subtotal = 0

            for item in data["items"]:

                product = Product.query.get(item["product_id"])

                if not product:
                    db.session.rollback()

                    return {
                        "success": False,
                        "message": f"Product {item['product_id']} not found."
                    }

                if product.quantity < item["quantity"]:
                    db.session.rollback()

                    return {
                        "success": False,
                        "message": f"{product.name} has insufficient stock."
                    }

                line_total = (
                    product.selling_price * item["quantity"]
                )

                subtotal += line_total

                sale_item = SaleItem(
                    sale_id=sale.id,
                    product_id=product.id,

                    product_name=product.name,
                    sku=product.sku,
                    barcode=product.barcode,

                    quantity=item["quantity"],
                    unit_price=product.selling_price,

                    discount=0,
                    tax=0,

                    total=line_total,
                )

                db.session.add(sale_item)

                product.quantity -= item["quantity"]

            grand_total = (
                subtotal
                - sale.discount
                + sale.tax
            )

            sale.subtotal = subtotal
            sale.grand_total = grand_total

            customer.total_orders += 1
            customer.total_spent += grand_total

            payment = Payment(
                sale_id=sale.id,
                payment_method=data["payment_method"],
                amount=grand_total,
                transaction_reference=data.get(
                    "transaction_reference"
                ),
                payment_status=data.get(
                    "payment_status",
                    "Completed"
                ),
                notes=data.get("notes"),
            )

            db.session.add(payment)

            db.session.commit()

            logger.info(
                f"Sale {invoice_number} created successfully."
            )

            return {
                "success": True,
                "invoice": invoice_number,
                "sale_id": sale.id,
            }

        except Exception as e:

            db.session.rollback()

            logger.error(str(e))

            return {
                "success": False,
                "message": str(e),
            }

    @staticmethod
    def delete_sale(sale):

        try:

            for item in sale.sale_items:

                product = Product.query.get(item.product_id)

                if product:
                    product.quantity += item.quantity

            db.session.delete(sale)

            db.session.commit()

            return {
                "success": True,
                "message": "Sale deleted successfully."
            }

        except Exception as e:

            db.session.rollback()

            logger.error(str(e))

            return {
                "success": False,
                "message": str(e),
            }