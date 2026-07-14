import { useEffect, useState } from "react";

import api from "../../services/api";

import InventoryToolbar from "../../components/inventory/InventoryToolbar";
import ProductTable from "../../components/inventory/ProductTable";

const initialProducts = [
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
  const [products, setProducts] = useState([]);
  useEffect(() => {
  fetchProducts();
}, []);

const fetchProducts = async () => {
  try {
    const response = await api.get("/products");
    setProducts(response.data);
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};
  // Add Product
  const addProduct = async (newProduct) => {
  try {
    await api.post("/products", {
      name: newProduct.name,
      sku: newProduct.sku,
      barcode: newProduct.barcode,
      category: newProduct.category,
      supplier: newProduct.supplier,
      purchase_price: Number(newProduct.purchasePrice),
      selling_price: Number(newProduct.sellingPrice),
      quantity: Number(newProduct.quantity),
      minimum_stock: Number(newProduct.minimumStock),
      description: newProduct.description,
    });

    fetchProducts();

  } catch (error) {
    console.error("Error adding product:", error);
  }
};

  // Update Product
  const updateProduct = (updatedProduct) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === updatedProduct.id
          ? {
              ...product,
              ...updatedProduct,
              price: Number(updatedProduct.sellingPrice) || product.price,
              stock: Number(updatedProduct.quantity) || product.stock,
            }
          : product
      )
    );
  };

  // Delete Product
const deleteProduct = (id) => {
  setProducts((prevProducts) =>
    prevProducts.filter((product) => product.id !== id)
  );
};
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "all" ||
      product.category.toLowerCase() === category.toLowerCase();

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
        addProduct={addProduct}
      />

      <ProductTable
  products={filteredProducts}
  updateProduct={updateProduct}
  deleteProduct={deleteProduct}
/>
    </div>
  );
}