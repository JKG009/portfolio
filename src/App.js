import { Navbar, Hero, About, Projects } from "./components/sections";
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
    </>
  );
}

export default App;
