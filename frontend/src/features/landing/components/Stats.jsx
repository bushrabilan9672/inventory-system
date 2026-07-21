import {
  Package,
  ShoppingCart,
  Users,
  TrendingUp,
} from "lucide-react";

const stats = [
  {
    icon: Package,
    value: "10K+",
    title: "Products Managed",
    description:
      "Track thousands of products effortlessly.",
  },
  {
    icon: ShoppingCart,
    value: "5K+",
    title: "Sales Processed",
    description:
      "Fast and reliable POS transactions.",
  },
  {
    icon: Users,
    value: "250+",
    title: "Businesses",
    description:
      "Growing businesses trust Inventra.",
  },
  {
    icon: TrendingUp,
    value: "99.9%",
    title: "System Reliability",
    description:
      "Reliable inventory management every day.",
  },
];

export default function Stats() {
  return (
    <section className="bg-white py-20">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-12 text-center">

          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Trusted Business Platform
          </p>

          <h2 className="mt-3 text-4xl font-bold text-slate-900">
            Businesses Choose Inventra
          </h2>

          <p className="mt-4 text-slate-600">
            Powerful inventory management designed for
            growing businesses.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {stats.map((item) => {

            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 inline-flex rounded-2xl bg-blue-100 p-4">
                  <Icon className="h-8 w-8 text-blue-600" />
                </div>

                <h3 className="text-4xl font-extrabold text-slate-900">
                  {item.value}
                </h3>

                <h4 className="mt-3 text-lg font-semibold">
                  {item.title}
                </h4>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {item.description}
                </p>

              </div>
            );

          })}

        </div>

      </div>

    </section>
  );
}