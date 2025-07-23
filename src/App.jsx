import React from "react";
import "./App.css";
import Navbar from "./components/nav";
import Hero from "./components/hero";
import AboutUs from "./components/AboutUs";
import Products from "./components/products";
import Contact from "./components/ContactUs";
import OpenHoursMarquee from "./components/OpenHours";
import Footer from "./components/Footer";
import BackToTopButton from "./components/BackToTopButton";

function App() {
  return (
    <>
      <Navbar />
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
  );
}

export default App;
