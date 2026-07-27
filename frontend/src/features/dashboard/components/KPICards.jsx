import {
  Package,
  ShoppingCart,
  Users,
  DollarSign,
  TrendingUp,
} from "lucide-react";

export default function KPICards({ kpis }) {

  const cards = [
    {
      title: "Revenue",
      value: `KSh ${Number(kpis?.revenue || 0).toLocaleString()}`,
      change: "+12%",
      icon: DollarSign,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Products",
      value: Number(kpis?.products || 0).toLocaleString(),
      change: "+0",
      icon: Package,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Orders",
      value: Number(kpis?.orders || 0).toLocaleString(),
      change: "+0",
      icon: ShoppingCart,
      color: "bg-orange-100 text-orange-600",
    },
    {
      title: "Customers",
      value: Number(kpis?.customers || 0).toLocaleString(),
      change: "+0",
      icon: Users,
      color: "bg-purple-100 text-purple-600",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      {cards.map((card) => {

        const Icon = card.icon;

        return (

          <div
            key={card.title}
            className="group rounded-3xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm font-medium text-slate-500">

                  {card.title}

                </p>

                <h2 className="mt-3 text-3xl font-bold text-slate-800">

                  {card.value}

                </h2>

                <div className="mt-4 flex items-center gap-2">

                  <TrendingUp
                    size={16}
                    className="text-emerald-500"
                  />

                  <span className="text-sm font-semibold text-emerald-600">

                    {card.change}

                  </span>

                  <span className="text-xs text-slate-400">

                    Live Data

                  </span>

                </div>

              </div>

              <div
                className={`rounded-2xl p-5 transition-all duration-300 group-hover:scale-110 ${card.color}`}
              >

                <Icon size={30} />

              </div>

            </div>

          </div>

        );

      })}

    </div>
  );

}