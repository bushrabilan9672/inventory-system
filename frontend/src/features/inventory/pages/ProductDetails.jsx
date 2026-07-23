import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import productApi from "../services/productApi";

import { Button } from "../../../components/ui/button";

export default function ProductDetails() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [product, setProduct] = useState(null);

  useEffect(() => {

    loadProduct();

  }, []);

  async function loadProduct() {

    try {

      const data = await productApi.getProduct(id);

      setProduct(data);

    }

    catch (err) {

      console.error(err);

    }

  }

  if (!product) {

    return (

      <div className="p-10">

        Loading Product...

      </div>

    );

  }

  return (

    <div className="space-y-8">

      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-4xl font-bold">

            Product Details

          </h1>

          <p className="text-slate-500">

            Complete information about this product.

          </p>

        </div>

        <div className="flex gap-4">

          <Button

            variant="outline"

            onClick={() => navigate("/inventory")}

          >

            Back

          </Button>

          <Button

            onClick={() => navigate(`/inventory/edit/${id}`)}

          >

            Edit Product

          </Button>

        </div>

      </div>

      <div className="grid gap-8 lg:grid-cols-3">

        <div className="rounded-3xl bg-white p-6 shadow">

          <img

            src={

              product.image

                ? `http://127.0.0.1:5000${product.image}`

                : "https://placehold.co/400x400"

            }

            alt={product.name}

            className="h-80 w-full rounded-xl object-cover"

          />

        </div>

        <div className="lg:col-span-2 rounded-3xl bg-white p-8 shadow">

          <h2 className="text-3xl font-bold">

            {product.name}

          </h2>

          <div className="mt-8 grid grid-cols-2 gap-6">

            <Detail label="SKU" value={product.sku} />
            <Detail label="Barcode" value={product.barcode} />
            <Detail label="Category" value={product.category} />
            <Detail label="Supplier" value={product.supplier} />

            <Detail
              label="Purchase Price"
              value={`KSh ${Number(product.purchase_price).toLocaleString()}`}
            />

            <Detail
              label="Selling Price"
              value={`KSh ${Number(product.selling_price).toLocaleString()}`}
            />

            <Detail
              label="Quantity"
              value={product.quantity}
            />

            <Detail
              label="Minimum Stock"
              value={product.minimum_stock}
            />

          </div>

          <div className="mt-8">

            <h3 className="font-semibold text-lg">

              Description

            </h3>

            <p className="mt-2 text-slate-600">

              {product.description || "No description"}

            </p>

          </div>

        </div>

      </div>

    </div>

  );

}

function Detail({ label, value }) {

  return (

    <div className="rounded-xl bg-slate-50 p-4">

      <p className="text-sm text-slate-500">

        {label}

      </p>

      <p className="mt-1 font-semibold text-lg">

        {value}

      </p>

    </div>

  );

}