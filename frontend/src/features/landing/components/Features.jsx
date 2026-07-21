import {
  Boxes,
  ShoppingCart,
  Users,
  Truck,
  BarChart3,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: Boxes,
    title: "Smart Inventory",
    description:
      "Track stock levels in real time, receive low-stock alerts, and manage products effortlessly.",
  },
  {
    icon: ShoppingCart,
    title: "Modern POS",
    description:
      "Complete sales quickly, generate receipts, and manage transactions with a fast point-of-sale system.",
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
      "Organize supplier information, deliveries, and purchasing in one place.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reports",
    description:
      "Generate insightful reports with charts, revenue analysis, inventory summaries, and sales trends.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Reliable",
    description:
      "Role-based access, secure authentication, and reliable data storage keep your business protected.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="bg-slate-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Powerful Features
          </span>

          <h2 className="mt-6 text-5xl font-bold tracking-tight text-slate-900">
            Everything You Need To Run
            <span className="block text-blue-600">
              Your Business
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Inventra combines inventory management,
            customer management, sales, suppliers,
            analytics and reporting into one intelligent platform.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((feature) => {

            const Icon = feature.icon;

            return (

              <div
                key={feature.title}
                className="group rounded-3xl border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-3 hover:border-blue-500 hover:shadow-2xl"
              >

                <div className="mb-6 inline-flex rounded-2xl bg-blue-100 p-4 transition group-hover:bg-blue-600">

                  <Icon className="h-8 w-8 text-blue-600 group-hover:text-white" />

                </div>

                <h3 className="text-2xl font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
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