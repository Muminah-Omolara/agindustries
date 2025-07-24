import "./swiper.css";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // ✅ Import Link

import Product1 from "../assets/product1.jpg";
import Product2 from "../assets/product2.jpg";
import Product4 from "../assets/product4.jpg";
import Product5 from "../assets/product5.avif";

const Products = () => {
  const products = [
    {
      id: 1, // ✅ Add ID
      img: Product1,
      name: "RoyalGad Lysol Disinfectant",
      desc: "Powerful disinfectant approved for Avian flu. Perfect for hospitals, homes, and veterinary use.",
    },
    {
      id: 2,
      img: Product2,
      name: "RoyalGad Germicide",
      desc: "A heavy-duty disinfectant formulated for both industrial and domestic use.",
    },
    {
      id: 3,
      img: Product4,
      name: "RoyalGad Antiseptic Disinfectant",
      desc: "Designed for first aid and other medical uses to ensure safety and hygiene.",
    },
    {
      id: 4,
      img: Product5,
      name: "RoyalGad Pine Disinfectant",
      desc: "Perfect for general domestic use, leaving spaces clean and fresh.",
    },
  ];

  return (
    <section className="bg-gray-50 py-4">
      <motion.div
        className="max-w-7xl mx-auto px-6 lg:px-10 text-center"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
      >
        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Our <span className="text-green-500">Top Products</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          As the leading manufacturer and distributor of premium disinfectants
          and antiseptics for industrial and domestic use nationwide, we present
          the following products for your hygiene and safety:
        </p>

        {/* Swiper Carousel */}
        <Swiper
          className="pb-16 px-12 relative cursor-pointer"
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {products.map((product, index) => (
            <SwiperSlide key={product.id}>
              {/* ✅ Wrap with Link to ProductDetails */}
              <Link to={`/shop/${product.id}`}>
                <motion.div
                  className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-500"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-green-700 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm pb-12 leading-relaxed">
                      {product.desc}
                    </p>
                  </div>
                </motion.div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default Products;
