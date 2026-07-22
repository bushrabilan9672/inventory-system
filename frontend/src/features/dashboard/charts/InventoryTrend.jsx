import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { month: "Jan", stock: 500 },
  { month: "Feb", stock: 650 },
  { month: "Mar", stock: 720 },
  { month: "Apr", stock: 810 },
  { month: "May", stock: 920 },
  { month: "Jun", stock: 980 },
];

export default function InventoryTrend() {

  return (

    <div className="rounded-3xl bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-2xl font-bold">

        Inventory Trend

      </h2>

      <ResponsiveContainer width="100%" height={320}>

        <BarChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="stock"
            fill="#2563eb"
            radius={[8, 8, 0, 0]}
          />

        </BarChart>

      </ResponsiveContainer>

    </div>

  );

}