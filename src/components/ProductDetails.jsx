import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
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

const statesInNigeria = [
  "Lagos",
  "Abuja",
  "Kano",
  "Rivers",
  "Oyo",
  "Enugu",
  "Anambra",
  "Kaduna",
  "Delta",
  "Ogun",
];

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const [selectedState, setSelectedState] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  if (!product) return <h1 className="text-center mt-20">Product not found</h1>;

  // ✅ Handle Add to Cart and Redirect to Checkout
  const handleAddToCart = () => {
    const cart = [{ ...product, quantity: 1 }];
    navigate("/checkout", { state: { cart } });
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-white shadow-lg rounded-lg p-6">
        {/* Left Section: Product Info */}
        <div className="flex flex-col lg:flex-row gap-6">
          <img
            src={product.image}
            alt={product.name}
            className="w-48 h-48 object-cover rounded-md shadow-md"
          />
          <div>
            <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
            <p className="text-gray-700 mb-3">{product.description}</p>
            <p className="text-green-700 text-xl font-bold mb-3">
              ₦{product.price.toLocaleString()}
            </p>
            <div className="flex text-yellow-500 text-lg mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar
                  key={i}
                  className={i < Math.floor(product.rating) ? "" : "opacity-40"}
                />
              ))}
            </div>
            <button
              onClick={handleAddToCart}
              className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"
            >
              Add to Cart
            </button>
          </div>
        </div>

        {/* Right Section: Location Form */}
        <div className="bg-gray-50 p-6 rounded-md shadow-inner">
          <h2 className="text-xl font-bold mb-4">
            Select Your Pickup Location
          </h2>
          <form>
            {/* State Dropdown */}
            <label className="block mb-2 text-gray-700 font-medium">
              Choose State:
            </label>
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-2 mb-6 focus:ring-2 focus:ring-green-500"
            >
              <option value="">-- Select State --</option>
              {statesInNigeria.map((state, index) => (
                <option key={index} value={state}>
                  {state}
                </option>
              ))}
            </select>

            {/*  Home Address Input (Show after state is selected) */}
            {selectedState && (
              <div className="mb-6">
                <label className="block mb-2 text-gray-700 font-medium">
                  Residential Address:
                </label>
                <input
                  type="text"
                  placeholder="Enter your address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-green-500"
                />
              </div>
            )}
          </form>

          {/* Office Address */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">
              Pick up at our physical office
            </h3>
            <p className="text-gray-600">
              PLOT 3, Royalgad Crescent, Royalgad bus stop, <br />
              Odo-ona Elewe Express Way, G.P.O box 18345, <br /> Dugbe, Ibadan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
