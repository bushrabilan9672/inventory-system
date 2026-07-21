import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";

export default function LowStockAlert({ products = [] }) {

  return (

    <Card>

      <CardContent className="p-6">

        <h2 className="mb-6 text-xl font-semibold">

          Low Stock Alerts

        </h2>

        {products.length === 0 ? (

          <p className="text-slate-500">

            No low stock products.

          </p>

        ) : (

          <div className="space-y-4">

            {products.map((product) => (

              <div
                key={product.id}
                className="flex items-center justify-between"
              >

                <div>

                  <p className="font-medium">

                    {product.name}

                  </p>

                  <p className="text-sm text-slate-500">

                    Remaining: {product.quantity}

                  </p>

                </div>

                <Badge
                  variant={
                    product.quantity <= 3
                      ? "destructive"
                      : "secondary"
                  }
                >

                  {product.quantity <= 3
                    ? "Critical"
                    : "Low"}

                </Badge>

              </div>

            ))}

          </div>

        )}

      </CardContent>

    </Card>

  );

}