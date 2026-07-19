import { useState } from "react";
import toast from "react-hot-toast";

import SalesAPI from "../services/salesApi";

export default function useCheckout(clearCart) {
  const [loading, setLoading] = useState(false);

  const checkout = async ({
    customerId,
    paymentMethod,
    paymentStatus,
    cart,
    discount = 0,
    tax = 0,
    notes = "",
    transactionReference = "",
  }) => {
    if (cart.length === 0) {
      toast.error("Cart is empty.");
      return null;
    }

    if (!customerId) {
      toast.error("Please select a customer.");
      return null;
    }

    try {
      setLoading(true);

      const payload = {
        customer_id: customerId,
        payment_method: paymentMethod,
        payment_status: paymentStatus,
        discount,
        tax,
        notes,
        transaction_reference: transactionReference,

        items: cart.map((item) => ({
          product_id: item.id,
          quantity: item.quantity,
        })),
      };

      const { data } = await SalesAPI.createSale(payload);

      toast.success("Sale completed successfully!");

      clearCart();

      return data;

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
          "Unable to complete sale."
      );

      return null;

    } finally {

      setLoading(false);

    }
  };

  return {
    checkout,
    loading,
  };
}