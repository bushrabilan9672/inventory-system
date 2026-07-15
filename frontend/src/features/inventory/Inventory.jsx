import { useEffect, useState } from "react";

import api from "../../services/api";

import InventoryToolbar from "../../components/inventory/InventoryToolbar";
import ProductTable from "../../components/inventory/ProductTable";

export default function Inventory() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  // Fetch Products
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
        image: newProduct.image,
      });

      fetchProducts();
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  // Update Product
  const updateProduct = async (updatedProduct) => {
    try {
      await api.put(`/products/${updatedProduct.id}`, {
        name: updatedProduct.name,
        sku: updatedProduct.sku,
        barcode: updatedProduct.barcode,
        category: updatedProduct.category,
        supplier: updatedProduct.supplier,
        purchase_price: Number(updatedProduct.purchasePrice),
        selling_price: Number(updatedProduct.sellingPrice),
        quantity: Number(updatedProduct.quantity),
        minimum_stock: Number(updatedProduct.minimumStock),
        description: updatedProduct.description,
        image: updatedProduct.image,
      });

      fetchProducts();
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  // Delete Product
  const deleteProduct = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmed) return;

    try {
      await api.delete(`/products/${id}`);
      fetchProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  // Filter Products
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "all" ||
      (product.category || "").toLowerCase() ===
        category.toLowerCase();

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