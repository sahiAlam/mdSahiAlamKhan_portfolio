import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <>
      <Header />
      <Home />
      <SocialLinks />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
    </>
  );
}

export default App;