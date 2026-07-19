import { useState } from "react";
import salesApi from "../services/salesApi";

export default function useCheckout(clearCart) {

  const [customerId, setCustomerId] = useState("");

  const [paymentMethod, setPaymentMethod] = useState("Cash");

  const [saleComplete, setSaleComplete] = useState(false);

  const [invoiceNumber, setInvoiceNumber] = useState("");

  async function checkout(cart) {

    if (cart.length === 0) {
      alert("Cart is empty.");
      return;
    }

    if (!customerId) {
      alert("Please select a customer.");
      return;
    }

    try {

      const payload = {

        customer_id: customerId,

        payment_method: paymentMethod,

        payment_status: "Completed",

        discount: 0,

        tax: 0,

        notes: "",

        items: cart.map(item => ({
          product_id: item.id,
          quantity: item.quantity,
        })),

      };

      const response = await salesApi.createSale(payload);

      if (response.success) {

        setInvoiceNumber(response.invoice);

        setSaleComplete(true);

        clearCart();

      } else {

        alert(response.message);

      }

    } catch (error) {

      console.error(error);

      alert("Failed to complete sale.");

    }

  }

  function closeDialog() {
    setSaleComplete(false);
  }

  return {

    customerId,
    setCustomerId,

    paymentMethod,
    setPaymentMethod,

    saleComplete,

    invoiceNumber,

    checkout,

    closeDialog,

  };

}