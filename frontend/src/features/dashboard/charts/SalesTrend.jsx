import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function SalesTrend({ data = [] }) {

  return (

    <div className="rounded-3xl bg-white p-6 shadow-sm">

      <div className="mb-6 flex items-center justify-between">

        <h2 className="text-2xl font-bold">

          Sales Trend

        </h2>

        <span className="text-sm text-slate-500">

          Last 6 Sales

        </span>

      </div>

      <ResponsiveContainer width="100%" height={320}>

        <AreaChart data={data}>

          <defs>

            <linearGradient
              id="salesGradient"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >

              <stop
                offset="5%"
                stopColor="#10b981"
                stopOpacity={0.8}
              />

              <stop
                offset="95%"
                stopColor="#10b981"
                stopOpacity={0}
              />

            </linearGradient>

          </defs>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="date" />

          <YAxis />

          <Tooltip
            formatter={(value) => [
              `KSh ${Number(value).toLocaleString()}`,
              "Sales",
            ]}
          />

          <Area
            type="monotone"
            dataKey="sales"
            stroke="#10b981"
            strokeWidth={3}
            fill="url(#salesGradient)"
          />

        </AreaChart>

      </ResponsiveContainer>

    </div>

  );

}