export default function ReceiptHeader({
  business = {
    name: "Smart Inventory System",
    address: "Garissa, Kenya",
    phone: "+254 700 000 000",
    email: "info@smartinventory.com",
  },
  sale = {},
}) {
  return (
    <div className="text-center border-b pb-4 mb-4">

      <h1 className="text-2xl font-bold uppercase">
        {business.name}
      </h1>

      <p className="text-sm text-gray-600">
        {business.address}
      </p>

      <p className="text-sm text-gray-600">
        {business.phone}
      </p>

      <p className="text-sm text-gray-600">
        {business.email}
      </p>

      <div className="mt-4 text-left space-y-1">

        <p>
          <strong>Invoice:</strong>{" "}
          {sale.invoice_number}
        </p>

        <p>
          <strong>Date:</strong>{" "}
          {sale.created_at}
        </p>

        <p>
          <strong>Customer:</strong>{" "}
          {sale.customer_name}
        </p>

        <p>
          <strong>Payment:</strong>{" "}
          {sale.payment_method}
        </p>

      </div>

    </div>
  );
}