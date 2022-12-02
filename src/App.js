import React, { useState, useEffect } from "react";
import {
  Navbar,
  Hero,
  About,
  Projects,
  Footer,
  Contact,
  Loader,
} from "./components/sections";
import "./styles/app.css";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    const mountPage = setTimeout(() => setIsMounted(true), 2500);
    return () => clearTimeout(mountPage);
  }, []);

  return (
    <>
      {isMounted ? (
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
      ) : (
        <Loader isMounted={isMounted} />
      )}
    </>
  );
}

export default App;
