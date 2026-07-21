import { useEffect, useState } from "react";

import {
  Card,
  CardContent,
} from "../../../components/ui/card";

import {
  DollarSign,
  Package,
  AlertTriangle,
  Boxes,
} from "lucide-react";

import reportsApi from "../services/reportsApi";

export default function ReportsStats() {

  const [stats, setStats] = useState({
    inventory_value: 0,
    total_products: 0,
    low_stock: 0,
    categories: 0,
  });

  useEffect(() => {
    loadStats();
  }, []);

  async function loadStats() {

    try {

      const data = await reportsApi.getDashboardStats();

      setStats(data);

    } catch (error) {

      console.error(error);

    }

  }

  return (

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

      <Card>

        <CardContent className="p-6 flex justify-between items-center">

          <div>

            <p className="text-sm text-gray-500">
              Inventory Value
            </p>

            <h2 className="text-2xl font-bold">

              KSh {Number(stats.inventory_value).toLocaleString()}

            </h2>

          </div>

          <DollarSign className="h-10 w-10 text-green-600" />

        </CardContent>

      </Card>

      <Card>

        <CardContent className="p-6 flex justify-between items-center">

          <div>

            <p className="text-sm text-gray-500">
              Products
            </p>

            <h2 className="text-2xl font-bold">

              {stats.total_products}

            </h2>

          </div>

          <Package className="h-10 w-10 text-blue-600" />

        </CardContent>

      </Card>

      <Card>

        <CardContent className="p-6 flex justify-between items-center">

          <div>

            <p className="text-sm text-gray-500">
              Categories
            </p>

            <h2 className="text-2xl font-bold">

              {stats.categories}

            </h2>

          </div>

          <Boxes className="h-10 w-10 text-purple-600" />

        </CardContent>

      </Card>

      <Card>

        <CardContent className="p-6 flex justify-between items-center">

          <div>

            <p className="text-sm text-gray-500">
              Low Stock
            </p>

            <h2 className="text-2xl font-bold">

              {stats.low_stock}

            </h2>

          </div>

          <AlertTriangle className="h-10 w-10 text-red-600" />

        </CardContent>

      </Card>

    </div>

  );

}