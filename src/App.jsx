import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/nav";
import Hero from "./components/hero";
import AboutUs from "./components/AboutUs";
import Products from "./components/products";
import Contact from "./components/ContactUs";
import OpenHoursMarquee from "./components/OpenHours";
import Footer from "./components/Footer";
import BackToTopButton from "./components/BackToTopButton";
import Shop from "./components/Shop";
import ProductDetails from "./components/ProductDetails";
import Checkout from "./components/Checkout";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home Page with Sections */}
        <Route
          path="/"
          element={
            <>
              <section id="home">
                <Hero />
              </section>
              <section id="about">
                <AboutUs />
              </section>
              <section id="products">
                <Products />
              </section>
              <section id="contact">
                <Contact />
              </section>
              <OpenHoursMarquee />
              <Footer />
              <BackToTopButton />
            </>
          }
        />

        {/* Shop Page */}
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<ProductDetails />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}

export default App;
