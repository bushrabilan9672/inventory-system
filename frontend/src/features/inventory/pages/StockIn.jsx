import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";

import productApi from "../services/productApi";

export default function StockIn() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadProduct();
  }, []);

  async function loadProduct() {

    try {

      const data = await productApi.getProduct(id);

      setProduct(data);

    } catch (err) {

      console.error(err);

    }

  }

  async function handleSubmit(e) {

    e.preventDefault();

    if (!quantity || Number(quantity) <= 0) {

      alert("Enter a valid quantity.");

      return;

    }

    try {

      setLoading(true);

      await productApi.stockIn(
        id,
        Number(quantity)
      );

      alert("Stock added successfully!");

      navigate("/inventory");

    } catch (err) {

      console.error(err);

      alert("Failed to update stock.");

    } finally {

      setLoading(false);

    }

  }

  if (!product) {

    return <p className="p-10">Loading...</p>;

  }

  return (

    <div className="mx-auto max-w-2xl rounded-3xl bg-white p-8 shadow">

      <h1 className="mb-6 text-3xl font-bold">

        Stock In

      </h1>

      <div className="mb-8 rounded-xl bg-slate-50 p-5">

        <p>

          <strong>Product:</strong> {product.name}

        </p>

        <p>

          <strong>Current Stock:</strong> {product.quantity}

        </p>

      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >

        <Input
          type="number"
          placeholder="Quantity to Add"
          value={quantity}
          onChange={(e) =>
            setQuantity(e.target.value)
          }
        />

        <div className="flex gap-4">

          <Button
            type="submit"
            disabled={loading}
          >

            {loading ? "Updating..." : "Stock In"}

          </Button>

          <Button
            type="button"
            variant="outline"
            onClick={() =>
              navigate("/inventory")
            }
          >

            Cancel

          </Button>

        </div>

      </form>

    </div>

  );

}