import { useEffect, useState } from "react";

import {
  Card,
  CardContent,
} from "../../../components/ui/card";

import reportsApi from "../services/reportsApi";

export default function TopProductsTable() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {

    try {

      const data =
        await reportsApi.getTopProducts();

      setProducts(data);

    } catch (error) {

      console.error(error);

    }

  }

  return (

    <Card>

      <CardContent className="p-6">

        <h2 className="text-xl font-bold mb-5">

          Best Selling Products

        </h2>

        {products.length === 0 ? (

          <p className="text-gray-500">

            No sales available.

          </p>

        ) : (

          <div className="space-y-4">

            {products.map((product, index) => (

              <div
                key={index}
                className="flex justify-between border-b pb-2"
              >

                <span>{product.product}</span>

                <span className="font-bold">

                  {product.sold} sold

                </span>

              </div>

            ))}

          </div>

        )}

      </CardContent>

    </Card>

  );

}