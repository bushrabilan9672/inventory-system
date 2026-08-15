export default function ReceiptHeader({
  business = {
    name: "Smart Inventory System",
    address: "Garissa, Kenya",
    phone: "+254 700 000 000",
    email: "info@smartinventory.com",
    website: "www.smartinventory.com",
  },
  sale = {},
}) {
  return (
    <div className="border-b pb-6 mb-6">

      <div className="text-center space-y-1">

        <h1 className="text-3xl font-bold uppercase tracking-wide">
          {business.name}
        </h1>

        <p className="text-sm text-slate-600">
          {business.address}
        </p>

        <p className="text-sm text-slate-600">
          Tel: {business.phone}
        </p>

        <p className="text-sm text-slate-600">
          {business.email}
        </p>

        <p className="text-sm text-slate-600">
          {business.website}
        </p>

      </div>

      <div className="mt-6 grid grid-cols-2 gap-y-2 text-sm">

        <span className="font-semibold">Invoice No</span>
        <span className="text-right">{sale.invoice_number}</span>

        <span className="font-semibold">Date</span>
        <span className="text-right">{sale.created_at}</span>

        <span className="font-semibold">Customer</span>
        <span className="text-right">{sale.customer_name}</span>

        <span className="font-semibold">Payment</span>
        <span className="text-right">{sale.payment_method}</span>

        <span className="font-semibold">Cashier</span>
        <span className="text-right">Admin</span>

      </div>

    </div>
  );
}