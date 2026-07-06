import { useState } from "react";

import InventoryToolbar from "../../components/inventory/InventoryToolbar";
import ProductTable from "../../components/inventory/ProductTable";

const products = [
  {
    id: 1,
    image: "https://placehold.co/80x80",
    name: "HP Laptop",
    sku: "HP001",
    category: "Electronics",
    price: 65000,
    stock: 12,
  },
  {
    id: 2,
    image: "https://placehold.co/80x80",
    name: "Wireless Mouse",
    sku: "MS002",
    category: "Accessories",
    price: 1200,
    stock: 4,
  },
  {
    id: 3,
    image: "https://placehold.co/80x80",
    name: "Office Chair",
    sku: "CH003",
    category: "Furniture",
    price: 8500,
    stock: 18,
  },
];

export default function Inventory() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "all" ||
      product.category.toLowerCase() === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          Inventory Management
        </h1>

        <p className="text-slate-500">
          Manage all your products from one place.
        </p>
      </div>

      <InventoryToolbar
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
      />

      <ProductTable products={filteredProducts} />
    </div>
  );
}