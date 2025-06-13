import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

const Checkout = () => {
  const { cartItems } = useContext(CartContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(timeout);
  }, []);

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (loading) return <Loading />;

  return (
    <div className="max-w-xl mx-auto p-6 bg-white dark:bg-gray-900 rounded shadow mt-10">
      <h2 className="text-2xl font-bold mb-4 dark:text-white">✅ Checkout</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-200">
          You have no items to checkout.{" "}
          <Link to="/" className="text-orange-600 dark:text-orange-400">Shop now!</Link>
        </p>
      ) : (
        <>
          <p className="text-lg mb-4 dark:text-gray-200">
            We appreciate your purchase! 🎉
          </p>
          <p className="text-xl font-semibold mb-2 dark:text-white">
            Total Amount: ₦{total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </p>
          <p className="mb-6 text-gray-600 dark:text-gray-400">
            Payments will be available shortly!
          </p>
          <Link
            to="/thank-you"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Finalize Order
          </Link>
        </>
      )}
    </div>
  );
};

export default Checkout;