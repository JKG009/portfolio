import { Navbar, Hero, About, Projects, Footer, Contact } from "./components/sections";
import "./styles/app.css";

function App() {
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
