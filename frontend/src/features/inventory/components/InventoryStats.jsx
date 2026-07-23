import {

  Package,

  Warehouse,

  AlertTriangle,

  DollarSign,

} from "lucide-react";

export default function InventoryStats({ products }) {

  const totalProducts = products.length;

  const totalValue = products.reduce(

    (sum, product) =>

      sum +

      Number(product.purchase_price) *

      Number(product.quantity),

    0

  );

  const lowStock = products.filter(

    (product) =>

      Number(product.quantity) <=

      Number(product.minimum_stock)

  ).length;

  const categories = [

    ...new Set(products.map((p) => p.category)),

  ].length;

  const cards = [

    {

      title: "Products",

      value: totalProducts,

      icon: Package,

      color: "bg-blue-100 text-blue-700",

    },

    {

      title: "Inventory Value",

      value: `KSh ${totalValue.toLocaleString()}`,

      icon: DollarSign,

      color: "bg-green-100 text-green-700",

    },

    {

      title: "Low Stock",

      value: lowStock,

      icon: AlertTriangle,

      color: "bg-red-100 text-red-700",

    },

    {

      title: "Categories",

      value: categories,

      icon: Warehouse,

      color: "bg-purple-100 text-purple-700",

    },

  ];

  return (

    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      {cards.map((card) => (

        <div

          key={card.title}

          className="rounded-3xl bg-white p-6 shadow"

        >

          <div className="flex items-center justify-between">

            <div>

              <p className="text-slate-500">

                {card.title}

              </p>

              <h2 className="mt-2 text-3xl font-bold">

                {card.value}

              </h2>

            </div>

            <div

              className={`rounded-2xl p-4 ${card.color}`}

            >

              <card.icon size={30} />

            </div>

          </div>

        </div>

      ))}

    </div>

  );

}