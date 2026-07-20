import {
  Card,
  CardContent,
} from "../../../components/ui/card";

import {
  DollarSign,
  ShoppingCart,
  Package,
  AlertTriangle,
} from "lucide-react";

export default function ReportsStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

      <Card>

        <CardContent className="p-6 flex justify-between items-center">

          <div>

            <p className="text-sm text-gray-500">
              Today's Sales
            </p>

            <h2 className="text-3xl font-bold">
              KSh 0
            </h2>

          </div>

          <DollarSign className="h-10 w-10 text-green-600" />

        </CardContent>

      </Card>

      <Card>

        <CardContent className="p-6 flex justify-between items-center">

          <div>

            <p className="text-sm text-gray-500">
              Monthly Revenue
            </p>

            <h2 className="text-3xl font-bold">
              KSh 0
            </h2>

          </div>

          <ShoppingCart className="h-10 w-10 text-blue-600" />

        </CardContent>

      </Card>

      <Card>

        <CardContent className="p-6 flex justify-between items-center">

          <div>

            <p className="text-sm text-gray-500">
              Products Sold
            </p>

            <h2 className="text-3xl font-bold">
              0
            </h2>

          </div>

          <Package className="h-10 w-10 text-purple-600" />

        </CardContent>

      </Card>

      <Card>

        <CardContent className="p-6 flex justify-between items-center">

          <div>

            <p className="text-sm text-gray-500">
              Low Stock
            </p>

            <h2 className="text-3xl font-bold">
              0
            </h2>

          </div>

          <AlertTriangle className="h-10 w-10 text-red-600" />

        </CardContent>

      </Card>

    </div>
  );
}