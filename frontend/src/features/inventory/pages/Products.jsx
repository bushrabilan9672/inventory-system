import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import ProductSearch from "../components/ProductSearch";
import ProductFilters from "../components/ProductFilters";
import ProductTable from "../components/ProductTable";
import InventoryStats from "../components/InventoryStats";

import { Button } from "../../../components/ui/button";

import productApi from "../services/productApi";

export default function Products() {

  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [supplier, setSupplier] = useState("");
  const [sort, setSort] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

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

  async function deleteProduct(id) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmed) return;

    try {
      await productApi.deleteProduct(id);

      alert("Product deleted successfully.");

      loadProducts();

    } catch (err) {

      console.error(err);

      alert("Failed to delete product.");

    }
  }

  // Dynamic Categories
  const categories = [
    ...new Set(
      products
        .map((product) => product.category)
        .filter(Boolean)
    ),
  ];

  // Dynamic Suppliers
  const suppliers = [
    ...new Set(
      products
        .map((product) => product.supplier)
        .filter(Boolean)
    ),
  ];

  // Search + Filters + Sorting
  const filteredProducts = products

    .filter((product) => {

      const keyword = search.toLowerCase();

      return (

        product.name?.toLowerCase().includes(keyword) ||

        product.sku?.toLowerCase().includes(keyword) ||

        product.barcode?.toLowerCase().includes(keyword) ||

        product.category?.toLowerCase().includes(keyword) ||

        product.supplier?.toLowerCase().includes(keyword)

      );

    })

    .filter((product) =>
      category === "" ? true : product.category === category
    )

    .filter((product) =>
      supplier === "" ? true : product.supplier === supplier
    )

    .sort((a, b) => {

      if (sort === "name") {

        return a.name.localeCompare(b.name);

      }

      if (sort === "stock") {

        return b.quantity - a.quantity;

      }

      if (sort === "price") {

        return b.selling_price - a.selling_price;

      }

      return 0;

    });

  // Pagination
  const totalPages = Math.ceil(
    filteredProducts.length / itemsPerPage
  );

  const startIndex =
    (currentPage - 1) * itemsPerPage;

  const paginatedProducts =
    filteredProducts.slice(
      startIndex,
      startIndex + itemsPerPage
    );

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

      {/* Statistics */}

      <InventoryStats products={products} />

      {/* Search */}

      <ProductSearch

        search={search}

        setSearch={setSearch}

      />

      {/* Filters */}

      <ProductFilters

        category={category}

        setCategory={setCategory}

        supplier={supplier}

        setSupplier={setSupplier}

        sort={sort}

        setSort={setSort}

        categories={categories}

        suppliers={suppliers}

      />

      {/* Product Table */}

      {loading ? (

        <div className="rounded-xl bg-white p-10 text-center shadow">

          Loading products...

        </div>

      ) : (

        <ProductTable

          products={paginatedProducts}

          deleteProduct={deleteProduct}

        />

      )}

      {/* Pagination */}

      <div className="mt-6 flex flex-col items-center justify-between gap-4 md:flex-row">

        <div className="flex items-center gap-2">

          <span className="text-sm text-slate-600">

            Show

          </span>

          <select

            value={itemsPerPage}

            onChange={(e) => {

              setItemsPerPage(Number(e.target.value));

              setCurrentPage(1);

            }}

            className="rounded-lg border px-3 py-2"

          >

            <option value={10}>10</option>

            <option value={25}>25</option>

            <option value={50}>50</option>

            <option value={100}>100</option>

          </select>

          <span className="text-sm text-slate-600">

            entries

          </span>

        </div>

        <div className="flex items-center gap-2">

          <Button

            variant="outline"

            disabled={currentPage === 1}

            onClick={() =>
              setCurrentPage(currentPage - 1)
            }

          >

            Previous

          </Button>

          <span className="rounded-lg bg-slate-100 px-4 py-2">

            {currentPage} / {totalPages || 1}

          </span>

          <Button

            variant="outline"

            disabled={
              currentPage === totalPages ||
              totalPages === 0
            }

            onClick={() =>
              setCurrentPage(currentPage + 1)
            }

          >

            Next

          </Button>

        </div>

      </div>

    </div>

  );

}