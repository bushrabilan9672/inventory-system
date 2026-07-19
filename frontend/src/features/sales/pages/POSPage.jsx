import { useEffect, useState } from "react";

import ProductSearch from "../components/product/ProductSearch";
import ProductGrid from "../components/product/ProductGrid";
import POSHeader from "../components/layout/POSHeader";
import POSStats from "../components/layout/POSStats";
import CategoryFilter from "../components/product/CategoryFilter";
import POSSidebar from "../components/layout/POSSidebar";
import SaleCompleteDialog from "../components/dialogs/SaleCompleteDialog";

import useCart from "../hooks/useCart";
import useCheckout from "../hooks/useCheckout";

import salesApi from "../services/salesApi";

export default function POSPage() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    subtotal,
    totalItems,
  } = useCart();

  const {
  customerId,
  setCustomerId,
  paymentMethod,
  setPaymentMethod,
  saleComplete,
  invoiceNumber,
  checkout,
  closeDialog,
} = useCheckout(clearCart);

  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {
  try {
    const data = await salesApi.getProducts();

    if (Array.isArray(data)) {
      setProducts(data);
    } else {
      setProducts([]);
    }
  } catch (error) {
    console.log(error);

    // Temporary demo products
    setProducts([
      {
        id: 1,
        name: "Laptop",
        sku: "LP001",
        quantity: 20,
        minimum_stock: 5,
        selling_price: 65000,
        category: "Electronics",
      },
      {
        id: 2,
        name: "Wireless Mouse",
        sku: "MS001",
        quantity: 50,
        minimum_stock: 10,
        selling_price: 1500,
        category: "Accessories",
      },
      {
        id: 3,
        name: "Keyboard",
        sku: "KB001",
        quantity: 15,
        minimum_stock: 5,
        selling_price: 2500,
        category: "Accessories",
      },
    ]);
  }
}

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <div className="space-y-6">

        <POSHeader />

        <POSStats
          totalItems={totalItems}
          subtotal={subtotal}
          products={products}
        />

        <ProductSearch
          search={search}
          setSearch={setSearch}
        />

        <CategoryFilter
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

          <div className="xl:col-span-2">

            <ProductGrid
              products={filteredProducts}
              addToCart={addToCart}
            />

          </div>

          <POSSidebar
            cart={cart}
            updateQuantity={updateQuantity}
            removeFromCart={removeFromCart}
           customerId={customerId}
setCustomerId={setCustomerId}
            paymentMethod={paymentMethod}
            setPaymentMethod={setPaymentMethod}
            subtotal={subtotal}
            totalItems={totalItems}
           checkout={() => checkout(cart)}
          />

        </div>

      </div>

      <SaleCompleteDialog
        open={saleComplete}
        onClose={closeDialog}
        invoiceNumber={invoiceNumber}
        total={subtotal}
      />
    </>
  );
}