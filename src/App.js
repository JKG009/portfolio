import React, { useEffect } from "react";
import {
  Navbar,
  Hero,
  About,
  Projects,
  Footer,
  Contact,
} from "./components/sections";
import "./styles/app.css";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="section-container">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
