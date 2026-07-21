export default function ReceiptItems({

  items = [],

}) {

  return (

    <div className="mb-6">

      <table className="w-full text-sm">

        <thead>

          <tr className="border-b">

            <th className="text-left py-2">
              Product
            </th>

            <th className="text-center py-2">
              Qty
            </th>

            <th className="text-right py-2">
              Price
            </th>

            <th className="text-right py-2">
              Total
            </th>

          </tr>

        </thead>

        <tbody>

          {items.map((item) => (

            <tr
              key={item.id}
              className="border-b"
            >

              <td className="py-2">
                {item.product_name}
              </td>

              <td className="text-center">
                {item.quantity}
              </td>

              <td className="text-right">
                KSh{" "}
                {Number(item.unit_price).toLocaleString()}
              </td>

              <td className="text-right">

                KSh{" "}

                {Number(item.total).toLocaleString()}

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}