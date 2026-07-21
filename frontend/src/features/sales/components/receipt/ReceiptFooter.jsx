export default function ReceiptFooter({
  sale = {},
}) {

  return (

    <div className="border-t pt-4 space-y-2">

      <div className="flex justify-between">

        <span>Subtotal</span>

        <span>

          KSh {Number(sale.subtotal || 0).toLocaleString()}

        </span>

      </div>

      <div className="flex justify-between">

        <span>Discount</span>

        <span>

          - KSh {Number(sale.discount || 0).toLocaleString()}

        </span>

      </div>

      <div className="flex justify-between">

        <span>Tax</span>

        <span>

          KSh {Number(sale.tax || 0).toLocaleString()}

        </span>

      </div>

      <div className="border-t pt-2 mt-2 flex justify-between text-xl font-bold">

        <span>TOTAL</span>

        <span>

          KSh {Number(sale.grand_total || 0).toLocaleString()}

        </span>

      </div>

      <div className="mt-8 text-center text-sm text-gray-600 space-y-1">

        <p>Thank you for shopping with us!</p>

        <p>Please keep this receipt for your records.</p>

        <p>Goods sold are not returnable without proof of purchase.</p>

      </div>

    </div>

  );

}