import {
  Card,
  CardContent,
} from "../../../../components/ui/card";

import { Button } from "../../../../components/ui/button";

import { Printer } from "lucide-react";

export default function Receipt({

  invoiceNumber,
  customer,
  paymentMethod,
  cart,
  subtotal,

}) {

  const tax = subtotal * 0.16;

  const total = subtotal + tax;

  return (

    <Card className="max-w-md mx-auto">

      <CardContent className="p-6 space-y-4">

        <div className="text-center">

          <h2 className="text-2xl font-bold">
            Smart Inventory System
          </h2>

          <p className="text-sm text-gray-500">
            Sales Receipt
          </p>

        </div>

        <hr />

        <div className="space-y-1 text-sm">

          <p>
            <strong>Invoice:</strong> {invoiceNumber}
          </p>

          <p>
            <strong>Customer:</strong> {customer}
          </p>

          <p>
            <strong>Payment:</strong> {paymentMethod}
          </p>

          <p>
            <strong>Date:</strong>{" "}
            {new Date().toLocaleString()}
          </p>

        </div>

        <hr />

        <div className="space-y-2">

          {cart.map(item => (

            <div
              key={item.id}
              className="flex justify-between"
            >

              <span>

                {item.name} × {item.quantity}

              </span>

              <span>

                KSh {(item.quantity * item.selling_price).toLocaleString()}

              </span>

            </div>

          ))}

        </div>

        <hr />

        <div className="space-y-2">

          <div className="flex justify-between">

            <span>Subtotal</span>

            <span>
              KSh {subtotal.toLocaleString()}
            </span>

          </div>

          <div className="flex justify-between">

            <span>VAT (16%)</span>

            <span>
              KSh {tax.toLocaleString()}
            </span>

          </div>

          <div className="flex justify-between font-bold text-lg">

            <span>Total</span>

            <span>
              KSh {total.toLocaleString()}
            </span>

          </div>

        </div>

        <Button
          className="w-full"
          onClick={() => window.print()}
        >

          <Printer className="mr-2 h-4 w-4" />

          Print Receipt

        </Button>

      </CardContent>

    </Card>

  );

}