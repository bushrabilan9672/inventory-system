import { useState } from "react";
import { useNavigate } from "react-router-dom";

import salesApi from "../services/salesApi";

export default function useCheckout(clearCart) {

  const navigate = useNavigate();

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

    const payload = {

      customer_id: Number(customerId),

      payment_method: paymentMethod,

      payment_status: "Completed",

      discount: 0,

      tax: 0,

      notes: "",

      items: cart.map((item) => ({

        product_id: item.id,

        quantity: item.quantity,

      })),

    };

    console.log("Sending payload:", payload);

    try {

      const response = await salesApi.createSale(payload);

      console.log("Server response:", response);

      if (response.success) {

        clearCart();

        navigate(`/sales/receipt/${response.sale_id}`);

      } else {

        alert(response.message);

      }

    } catch (error) {

      console.error(error);

      if (error.response) {

        console.log("Backend Error:", error.response.data);

        alert(error.response.data.message);

      } else {

        alert("Failed to complete sale.");

      }

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