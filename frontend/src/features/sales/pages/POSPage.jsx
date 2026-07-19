import { useEffect, useState } from "react";

import SalesAPI from "../services/salesApi";

import useCart from "../hooks/useCart";
import useCheckout from "../hooks/useCheckout";

import POSHeader from "../components/layout/POSHeader";

import ProductSearch from "../components/product/ProductSearch";

import ProductGrid from "../components/product/ProductGrid";

import CartTable from "../components/cart/CartTable";

import CartSummary from "../components/cart/CartSummary";

import CustomerSelector from "../components/customer/CustomerSelector";

import PaymentSelector from "../components/payment/PaymentSelector";

import SaleCompleteDialog from "../components/dialogs/SaleCompleteDialog";

import toast from "react-hot-toast";

export default function POSPage() {
  const [products, setProducts] = useState([]);

  const [customers, setCustomers] = useState([]);

  const [search, setSearch] = useState("");

  const [customerId, setCustomerId] = useState("");

  const [paymentMethod, setPaymentMethod] =
    useState("Cash");

  const [paymentStatus, setPaymentStatus] =
    useState("Completed");

  const [saleResult, setSaleResult] = useState(null);

  const {
    cart,

    addToCart,

    removeFromCart,

    increaseQuantity,

    decreaseQuantity,

    clearCart,

    subtotal,

    tax,

    discount,

    total,

    totalItems,
  } = useCart();

  const { checkout, loading } =
    useCheckout(clearCart);

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    try {
      const [productsRes, customersRes] =
        await Promise.all([
          SalesAPI.getProducts(),
          SalesAPI.getCustomers(),
        ]);

      setProducts(productsRes.data);

      setCustomers(customersRes.data);

    } catch (error) {
      toast.error("Failed to load POS data.");
    }
  }

  const filteredProducts =
    products.filter((product) =>
      product.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  async function handleCheckout() {
    const result = await checkout({
      customerId,

      paymentMethod,

      paymentStatus,

      cart,

      discount,

      tax,
    });

    if (result) {
      setSaleResult(result);
    }
  }

  return (
    <div className="space-y-6 p-6">

      <POSHeader />

      <div className="grid gap-6 xl:grid-cols-12">

        {/* Products */}

        <div className="xl:col-span-5 space-y-4">

          <ProductSearch
            search={search}
            setSearch={setSearch}
          />

          <ProductGrid
            products={filteredProducts}
            addToCart={addToCart}
          />

        </div>

        {/* Cart */}

        <div className="xl:col-span-4 space-y-4">

          <CartTable
            cart={cart}
            increaseQuantity={
              increaseQuantity
            }
            decreaseQuantity={
              decreaseQuantity
            }
            removeFromCart={
              removeFromCart
            }
          />

        </div>

        {/* Checkout */}

        <div className="xl:col-span-3 space-y-4">

          <CustomerSelector
            customers={customers}
            customerId={customerId}
            setCustomerId={setCustomerId}
          />

          <PaymentSelector
            paymentMethod={paymentMethod}
            setPaymentMethod={setPaymentMethod}
          />

          <CartSummary
            subtotal={subtotal}
            tax={tax}
            discount={discount}
            total={total}
            totalItems={totalItems}
            loading={loading}
            onCheckout={handleCheckout}
          />

        </div>

      </div>

      <SaleCompleteDialog
        sale={saleResult}
      />

    </div>
  );
}