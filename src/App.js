import React from "react";
import FooterAbove from "./FooterAbove.js";
import Navbar from "./Navbar.js";
import Details from "./Details.js";
import Section1 from "./Section1.js";
import Carousel from "./Carousel.js";
import Pricelist from "./Pricelist.js";
import Footer from "./Footer.js";

const App = () => {
  return (
    <>
      <Navbar />
      <Details />
      <Section1 />
      <Carousel />
      <Pricelist />
      <FooterAbove />
      <Footer />
    </>
  );
};

export default App;
