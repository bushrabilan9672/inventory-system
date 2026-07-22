import ProductSearch from "../components/ProductSearch";
import ProductFilters from "../components/ProductFilters";
import ProductTable from "../components/ProductTable";

import { Button } from "../../../components/ui/button";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import productApi from "../services/productApi";

export default function Products() {

  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {

    try {

      const data = await productApi.getProducts();

      setProducts(data);

    } catch (err) {

      console.error(err);

    } finally {

      setLoading(false);

    }

  }

  return (

    <div className="space-y-8">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-4xl font-bold">
            Products
          </h1>

          <p className="mt-2 text-slate-500">
            Manage all products in your inventory.
          </p>

        </div>

        <Button
          className="rounded-xl h-11 px-6"
          onClick={() => navigate("/inventory/add")}
        >
          + Add Product
        </Button>

      </div>

      {/* Search */}

      <ProductSearch />

      {/* Filters */}

      <ProductFilters />

      {/* Loading */}

      {loading ? (

        <div className="rounded-xl bg-white p-10 text-center shadow">

          Loading products...

        </div>

      ) : (

        <ProductTable
          products={products}
        />

      )}

    </div>

  );

}