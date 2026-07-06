import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";

const products = [
  {
    name: "HP Printer",
    stock: 3,
    status: "Critical",
  },
  {
    name: "Wireless Mouse",
    stock: 7,
    status: "Low",
  },
  {
    name: "Office Chair",
    stock: 5,
    status: "Low",
  },
  {
    name: "Laptop Charger",
    stock: 2,
    status: "Critical",
  },
];

export default function LowStockAlert() {
  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="mb-6 text-xl font-semibold">
          Low Stock Alerts
        </h2>

        <div className="space-y-4">
          {products.map((product) => (
            <div
              key={product.name}
              className="flex items-center justify-between"
            >
              <div>
                <p className="font-medium">{product.name}</p>

                <p className="text-sm text-slate-500">
                  Remaining: {product.stock}
                </p>
              </div>

              <Badge
                variant={
                  product.status === "Critical"
                    ? "destructive"
                    : "secondary"
                }
              >
                {product.status}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}