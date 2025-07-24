import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Checkout = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [cart, setCart] = useState(state?.cart || []);

  const handleIncrease = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrease = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleRemove = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6 pt-24 lg:flex gap-6">
      {/* Left Section */}
      <div className="flex-1 bg-white rounded-lg shadow p-6">
        <h2 className="text-3xl font-bold mb-4 text-center">Your Cart</h2>
        {cart.length === 0 ? (
          <div className="text-center">
            <p className="mb-4">Your cart is empty</p>
            <button
              onClick={() => navigate("/shop")}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Go to Shop
            </button>
          </div>
        ) : (
          cart.map((item, index) => (
            <div key={item.id} className="mb-6">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded"
                  />
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-green-700 font-bold">₦{item.price}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleDecrease(item.id)}
                    className="bg-gray-300 px-2 rounded cursor-pointer"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => handleIncrease(item.id)}
                    className="bg-gray-300 px-2 rounded cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Remove Button */}
              <div className="text-right mt-2">
                <button
                  onClick={() => handleRemove(item.id)}
                  className="text-red-500 hover:text-red-700 text-sm"
                >
                  Remove
                </button>
              </div>

              {/* Divider */}
              {index < cart.length - 1 && <hr className="my-4" />}
            </div>
          ))
        )}
      </div>

      {/* Right Section */}
      {cart.length > 0 && (
        <div className="w-full lg:w-1/3 bg-white rounded-lg shadow p-6 mt-6 lg:mt-0">
          <h2 className="text-xl font-bold mb-4">Cart Summary</h2>
          <p className="text-lg font-semibold mb-4">
            Subtotal: ₦{subtotal.toLocaleString()}
          </p>
          <button className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 cursor-pointer">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
