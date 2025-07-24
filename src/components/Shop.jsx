import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";
import product4 from "../assets/product4.jpg";

const products = [
  {
    id: 1,
    name: "RoyalGad Lysol",
    price: 2500,
    image: product1,
    rating: 4.5,
    description: "Powerful disinfectant for home and hospitals.",
  },
  {
    id: 2,
    name: "RoyalGad Germicide",
    price: 1800,
    image: product2,
    rating: 4.0,
    description: "Kills germs and bacteria effectively.",
  },
  {
    id: 3,
    name: "RoyalGad Antiseptic",
    price: 2000,
    image: product3,
    rating: 4.8,
    description: "Safe antiseptic for daily use.",
  },
  {
    id: 4,
    name: "RoyalGad Pine Disinfectant",
    price: 1500,
    image: product4,
    rating: 4.3,
    description: "Fresh pine scent with strong germ-killing power.",
  },
];

const Shop = () => {
  const [cart, setCart] = useState([]);
  const [toast, setToast] = useState(null);
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    showToast(`${product.name} added to cart`);
  };

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <section className="min-h-screen mt-16 bg-gray-50 py-10 px-6 relative">
      {/* Cart Icon */}
      <div
        onClick={() => navigate("/checkout", { state: { cart } })}
        className="absolute top-6 right-6 flex items-center gap-1 cursor-pointer z-50"
      >
        <FaShoppingCart size={28} className="text-green-700" />
        <span className="bg-green-600 cursor-pointer text-white text-sm px-2 py-1 rounded-full">
          {cart.reduce((sum, item) => sum + item.quantity, 0)}
        </span>
      </div>

      <h1 className="text-3xl font-bold text-center text-green-700 mb-8">
        Shop Our Products
      </h1>

      {/* Toast */}
      {toast && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-2 rounded shadow-lg z-50">
          {toast}
        </div>
      )}

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="group bg-white rounded-lg overflow-hidden shadow-md transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
          >
            <Link to={`/shop/${product.id}`} className="block overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </Link>
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-green-700 font-bold">₦{product.price}</p>
              <div className="flex text-yellow-500 text-sm mt-1 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar
                    key={i}
                    className={
                      i < Math.floor(product.rating) ? "" : "opacity-40"
                    }
                  />
                ))}
              </div>

              {/* Add to Cart */}
              <button
                onClick={() => handleAddToCart(product)}
                className="mt-auto bg-green-600 cursor-pointer text-white px-4 py-2 rounded opacity-0 group-hover:opacity-100 transition duration-500"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Shop;
