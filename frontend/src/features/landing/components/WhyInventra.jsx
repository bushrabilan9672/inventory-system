import {
  CheckCircle,
  Clock3,
  ShieldCheck,
  BarChart3,
} from "lucide-react";

const reasons = [
  {
    icon: CheckCircle,
    title: "Easy To Use",
    description:
      "A clean interface designed for both beginners and experienced business owners.",
  },
  {
    icon: Clock3,
    title: "Save Time",
    description:
      "Automate inventory tracking, sales recording and reporting.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Data",
    description:
      "Keep your business information safe with secure authentication and reliable storage.",
  },
  {
    icon: BarChart3,
    title: "Business Insights",
    description:
      "Understand your sales and inventory through beautiful reports and analytics.",
  },
];

export default function WhyInventra() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}

          <div>

            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              Why Inventra?
            </span>

            <h2 className="mt-6 text-5xl font-bold text-slate-900">
              Built For
              <span className="block text-blue-600">
                Modern Businesses
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Inventra simplifies inventory management,
              customer management, supplier tracking,
              sales and reporting into one intelligent system.
            </p>

          </div>

          {/* Right */}

          <div className="grid gap-6">

            {reasons.map((item) => {

              const Icon = item.icon;

              return (

                <div
                  key={item.title}
                  className="rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-xl"
                >

                  <div className="flex gap-5">

                    <div className="rounded-xl bg-blue-100 p-4">

                      <Icon className="h-7 w-7 text-blue-600"/>

                    </div>

                    <div>

                      <h3 className="text-xl font-bold">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-slate-600">
                        {item.description}
                      </p>

                    </div>

                  </div>

                </div>

              );

            })}

          </div>

        </div>

      </div>
    </section>
  );
}