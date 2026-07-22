import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { month: "Jan", sales: 120000 },
  { month: "Feb", sales: 180000 },
  { month: "Mar", sales: 150000 },
  { month: "Apr", sales: 230000 },
  { month: "May", sales: 280000 },
  { month: "Jun", sales: 320000 },
];

export default function SalesTrend() {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-2xl font-bold">
        Sales Trend
      </h2>

      <ResponsiveContainer width="100%" height={320}>

        <AreaChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Area
            type="monotone"
            dataKey="sales"
            stroke="#2563eb"
            fill="#93c5fd"
          />

        </AreaChart>

      </ResponsiveContainer>

    </div>
  );
}