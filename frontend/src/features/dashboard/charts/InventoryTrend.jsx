import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function InventoryTrend({ data = [] }) {

  return (

    <div className="rounded-3xl bg-white p-6 shadow-sm">

      <div className="mb-6 flex items-center justify-between">

        <h2 className="text-2xl font-bold">

          Inventory Levels

        </h2>

        <span className="text-sm text-slate-500">

          Top 8 Products

        </span>

      </div>

      <ResponsiveContainer width="100%" height={320}>

        <BarChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis
            dataKey="product"
            angle={-20}
            textAnchor="end"
            interval={0}
            height={60}
          />

          <YAxis />

          <Tooltip
            formatter={(value) => [
              `${Number(value).toLocaleString()} Units`,
              "Stock",
            ]}
          />

          <Bar
            dataKey="stock"
            fill="#3b82f6"
            radius={[8, 8, 0, 0]}
          />

        </BarChart>

      </ResponsiveContainer>

    </div>

  );

}