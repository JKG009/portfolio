import { Navbar, Hero, About, Projects, Footer } from "./components/sections";
import "./styles/app.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="section-container">
        <Hero />
        <About />
        <Projects />
      </div>
        <Footer />
    </>
  );
}

export default App;
