import { Card, CardContent } from "../../../components/ui/card";
import { Badge } from "../../../components/ui/badge";

export default function LowStockAlert({ products = [] }) {

  return (

    <Card>

      <CardContent className="p-6">

        <div className="mb-6 flex items-center justify-between">

          <h2 className="text-xl font-semibold">

            Low Stock Alerts

          </h2>

          <Badge variant="outline">

            {products.length} Products

          </Badge>

        </div>

        {products.length === 0 ? (

          <div className="rounded-xl bg-green-50 p-6 text-center">

            <p className="font-medium text-green-700">

              ✅ All products are sufficiently stocked.

            </p>

          </div>

        ) : (

          <div className="space-y-5">

            {products.map((product) => {

              const percent = Math.min(
                (product.quantity / product.minimum_stock) * 100,
                100
              );

              return (

                <div
                  key={product.id}
                  className="rounded-xl border p-4"
                >

                  <div className="mb-3 flex items-center justify-between">

                    <div>

                      <h3 className="font-semibold">

                        {product.name}

                      </h3>

                      <p className="text-sm text-slate-500">

                        {product.category || "Uncategorized"}

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
                        : product.quantity <= product.minimum_stock
                        ? "Low"
                        : "Warning"}

                    </Badge>

                  </div>

                  <div className="mb-2 flex justify-between text-sm">

                    <span>

                      Stock: {product.quantity}

                    </span>

                    <span>

                      Minimum: {product.minimum_stock}

                    </span>

                  </div>

                  <div className="h-2 overflow-hidden rounded-full bg-slate-200">

                    <div
                      className={`h-full rounded-full ${
                        product.quantity <= 3
                          ? "bg-red-500"
                          : "bg-yellow-500"
                      }`}
                      style={{
                        width: `${percent}%`,
                      }}
                    />

                  </div>

                </div>

              );

            })}

          </div>

        )}

      </CardContent>

    </Card>

  );

}