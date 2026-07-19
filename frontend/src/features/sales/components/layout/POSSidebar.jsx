import CustomerSelector from "../customer/CustomerSelector";
import CartTable from "../cart/CartTable";
import CartSummary from "../cart/CartSummary";
import PaymentSelector from "../payment/PaymentSelector";

export default function POSSidebar({

    cart,
    updateQuantity,
    removeFromCart,

    customerId,
setCustomerId,
    paymentMethod,
    setPaymentMethod,

    subtotal,
    totalItems,

    checkout,

}) {

    return (

        <div className="space-y-5 sticky top-6">

            <CustomerSelector
                customerId={customerId}
    setCustomerId={setCustomerId}
            />

            <CartTable
                cart={cart}
                updateQuantity={updateQuantity}
                removeFromCart={removeFromCart}
            />

            <PaymentSelector
                paymentMethod={paymentMethod}
                setPaymentMethod={setPaymentMethod}
            />

            <CartSummary
                cart={cart}
    subtotal={subtotal}
    onCheckout={checkout}
            />

        </div>

    );

}