import {
  Package,
  ShoppingCart,
  Users,
  DollarSign
} from "lucide-react";

const cards = [
  {
    title: "Revenue",
    value: "KSh 793,500",
    icon: DollarSign,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Products",
    value: "1,250",
    icon: Package,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Orders",
    value: "248",
    icon: ShoppingCart,
    color: "bg-orange-100 text-orange-600",
  },
  {
    title: "Customers",
    value: "825",
    icon: Users,
    color: "bg-purple-100 text-purple-600",
  },
];

export default function KPICards() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      {cards.map((card) => {

        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="rounded-3xl bg-white p-6 shadow-sm"
          >

            <div className="flex items-center justify-between">

              <div>

                <p className="text-slate-500">
                  {card.title}
                </p>

                <h2 className="mt-3 text-3xl font-bold">
                  {card.value}
                </h2>

              </div>

              <div className={`rounded-2xl p-4 ${card.color}`}>
                <Icon size={28} />
              </div>

            </div>

          </div>
        );

      })}

    </div>
  );
}