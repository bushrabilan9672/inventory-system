import {
  Package,
  ShoppingCart,
  Users,
  Truck,
  BarChart3,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: Package,
    title: "Inventory Management",
    description:
      "Track stock levels, monitor inventory movements, and prevent stock shortages with real-time updates.",
  },
  {
    icon: ShoppingCart,
    title: "Sales & POS",
    description:
      "Process sales quickly with a modern Point of Sale system and generate digital receipts instantly.",
  },
  {
    icon: Users,
    title: "Customer Management",
    description:
      "Maintain customer records, purchase history, and build stronger customer relationships.",
  },
  {
    icon: Truck,
    title: "Supplier Management",
    description:
      "Organize supplier information, deliveries, and purchase orders in one place.",
  },
  {
    icon: BarChart3,
    title: "Reports & Analytics",
    description:
      "Visualize business performance using charts, reports, and real-time analytics.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Reliable",
    description:
      "User authentication, role management, and secure data storage keep your business protected.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="bg-slate-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            FEATURES
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Everything You Need
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-500">
            Inventra provides all the essential tools to help
            businesses manage inventory, sales, suppliers,
            customers, and business analytics efficiently.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((feature) => {

            const Icon = feature.icon;

            return (

              <div
                key={feature.title}
                className="group rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-700 transition group-hover:bg-blue-600 group-hover:text-white">

                  <Icon size={30} />

                </div>

                <h3 className="mt-8 text-2xl font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-500">
                  {feature.description}
                </p>

                <button className="mt-8 font-semibold text-blue-600 transition hover:text-blue-800">
                  Learn More →
                </button>

              </div>

            );

          })}

        </div>

      </div>
    </section>
  );
}