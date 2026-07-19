import {
  Package,
  ShoppingCart,
  Users,
  Truck,
  BarChart3,
  ShieldCheck,
  BellRing,
  Receipt,
} from "lucide-react";

const features = [
  {
    icon: Package,
    title: "Inventory Management",
    description:
      "Manage products, categories, stock levels, barcodes and inventory value in real time.",
  },
  {
    icon: ShoppingCart,
    title: "Point of Sale",
    description:
      "Fast checkout, automatic stock deduction, invoices and multiple payment methods.",
  },
  {
    icon: Users,
    title: "Customer Management",
    description:
      "Maintain customer profiles, purchase history, loyalty information and outstanding balances.",
  },
  {
    icon: Truck,
    title: "Supplier Management",
    description:
      "Manage suppliers, purchase information, contacts and procurement history.",
  },
  {
    icon: Receipt,
    title: "Sales & Invoices",
    description:
      "Generate professional invoices and monitor every sale made by the business.",
  },
  {
    icon: BarChart3,
    title: "Reports & Analytics",
    description:
      "Generate business reports with sales, profits, stock movement and inventory performance.",
  },
  {
    icon: BellRing,
    title: "Low Stock Alerts",
    description:
      "Receive notifications when products reach their minimum stock level.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Access",
    description:
      "Role-based authentication for administrators, managers and cashiers.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-24 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">

          <span className="text-blue-600 font-semibold uppercase tracking-wider">
            Features
          </span>

          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            Everything a Modern Business Needs
          </h2>

          <p className="mt-6 text-gray-600 text-lg">
            Smart Inventory combines inventory management,
            customer management, supplier management,
            point of sale and business analytics into one
            powerful platform.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition duration-300 border border-gray-100"
              >
                <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-6">

                  <Icon className="text-blue-600" size={28} />

                </div>

                <h3 className="text-xl font-semibold mb-3">

                  {feature.title}

                </h3>

                <p className="text-gray-600 leading-7">

                  {feature.description}

                </p>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}