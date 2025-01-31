import React, { useContext } from "react";
import About from "./components/About";
import Services from "./components/Services";
import Header from "./components/Header";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const Homepage = () => {
  return (
    <>
      <Header />
      <About />
      <Services />
      <Work />
      <Contact />
    </>
  );
};

export default Homepage;
