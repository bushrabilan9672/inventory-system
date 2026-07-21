import { useEffect, useState } from "react";

import {
  Card,
  CardContent,
} from "../../../components/ui/card";

import reportsApi from "../services/reportsApi";

export default function LowStockTable() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {

    try {

      const data =
        await reportsApi.getLowStock();

      setProducts(data);

    } catch (error) {

      console.error(error);

    }

  }

  return (

    <Card>

      <CardContent className="p-6">

        <h2 className="text-xl font-bold mb-5">

          Low Stock Products

        </h2>

        {products.length === 0 ? (

          <p className="text-gray-500">

            No low stock products.

          </p>

        ) : (

          <div className="space-y-4">

            {products.map((product) => (

              <div
                key={product.id}
                className="flex justify-between border-b pb-2"
              >

                <div>

                  <p className="font-semibold">
                    {product.name}
                  </p>

                  <p className="text-sm text-gray-500">
                    {product.category}
                  </p>

                </div>

                <div className="text-right">

                  <p className="font-bold text-red-600">

                    {product.quantity}

                  </p>

                  <p className="text-xs text-gray-500">

                    Min: {product.minimum_stock}

                  </p>

                </div>

              </div>

            ))}

          </div>

        )}

      </CardContent>

    </Card>

  );

}