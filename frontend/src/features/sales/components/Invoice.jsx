import {
  Card,
  CardContent,
} from "../../../components/ui/card";

import { Button } from "../../../components/ui/button";

import {
  Printer,
  Download,
  Store,
} from "lucide-react";
export default function Invoice({
  sale,
}) {

  if (!sale) return null;

  const printInvoice = () => {
    window.print();
  };

  return (

    <Card className="max-w-4xl mx-auto shadow-xl">

      <CardContent className="p-8 space-y-8">

        <div className="text-center">

          <Store className="mx-auto h-12 w-12 text-blue-600"/>

          <h1 className="text-3xl font-bold mt-2">
            Smart Inventory System
          </h1>

          <p className="text-slate-500">
            Sales Receipt
          </p>

        </div>

        <div className="grid grid-cols-2 gap-8">

          <div>

            <h3 className="font-semibold">
              Invoice
            </h3>

            <p>{sale.invoice}</p>

            <p>{sale.date}</p>

          </div>

          <div className="text-right">

            <h3 className="font-semibold">
              Customer
            </h3>

            <p>{sale.customer}</p>

            <p>{sale.payment}</p>

          </div>

        </div>

        <table className="w-full">

          <thead>

            <tr className="border-b">

              <th className="text-left py-3">
                Product
              </th>

              <th>
                Qty
              </th>

              <th>
                Price
              </th>

              <th className="text-right">
                Total
              </th>

            </tr>

          </thead>

          <tbody>

            {sale.items.map((item) => (

              <tr
                key={item.product_id}
                className="border-b"
              >

                <td className="py-3">
                  {item.product_name}
                </td>

                <td className="text-center">
                  {item.quantity}
                </td>

                <td className="text-center">
                  KSh {item.unit_price.toLocaleString()}
                </td>

                <td className="text-right">
                  KSh {item.total.toLocaleString()}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

        <div className="flex justify-end">

          <div className="w-72 space-y-2">

            <div className="flex justify-between">

              <span>Subtotal</span>

              <span>
                KSh {sale.subtotal.toLocaleString()}
              </span>

            </div>

            <div className="flex justify-between">

              <span>Discount</span>

              <span>
                KSh {sale.discount.toLocaleString()}
              </span>

            </div>

            <div className="flex justify-between">

              <span>Tax</span>

              <span>
                KSh {sale.tax.toLocaleString()}
              </span>

            </div>

            <hr/>

            <div className="flex justify-between text-xl font-bold">

              <span>Total</span>

              <span className="text-green-600">

                KSh {sale.total.toLocaleString()}

              </span>

            </div>

          </div>

        </div>

        <div className="flex justify-center gap-4">

          <Button
            onClick={printInvoice}
          >

            <Printer className="mr-2 h-4 w-4"/>

            Print

          </Button>

          <Button
            variant="outline"
          >

            <Download className="mr-2 h-4 w-4"/>

            Download PDF

          </Button>

        </div>

      </CardContent>

    </Card>

  );

}