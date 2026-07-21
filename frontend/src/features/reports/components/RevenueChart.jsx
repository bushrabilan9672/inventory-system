import { useEffect, useState } from "react";

import {
  Card,
  CardContent,
} from "../../../components/ui/card";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import reportsApi from "../services/reportsApi";

export default function RevenueChart() {

  const [data, setData] = useState([]);

  useEffect(() => {
    loadChart();
  }, []);

  async function loadChart() {

    try {

      const result =
        await reportsApi.getMonthlySales();

      setData(result);

    } catch (error) {

      console.error(error);

    }

  }

  return (

    <Card>

      <CardContent className="p-6">

        <h2 className="text-xl font-bold mb-6">

          Monthly Sales Revenue

        </h2>

        <div className="h-96">

          <ResponsiveContainer
            width="100%"
            height="100%"
          >

            <LineChart data={data}>

              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="month" />

              <YAxis />

              <Tooltip
                formatter={(value) =>
                  `KSh ${Number(value).toLocaleString()}`
                }
              />

              <Line
                type="monotone"
                dataKey="sales"
                stroke="#2563eb"
                strokeWidth={3}
              />

            </LineChart>

          </ResponsiveContainer>

        </div>

      </CardContent>

    </Card>

  );

}