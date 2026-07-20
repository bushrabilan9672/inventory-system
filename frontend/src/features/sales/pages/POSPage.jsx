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

      console.error(error);

      setProducts([]);

    }

  }

  const filteredProducts = products.filter((product) => {

    const matchesSearch =
      product.name
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
        customer={`Customer #${customerId}`}
        paymentMethod={paymentMethod}
        cart={cart}
        subtotal={subtotal}
      />

    </>

  );

}