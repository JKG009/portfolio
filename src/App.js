import { Navbar, Hero, About, Projects } from "./components/sections";

function App() {
  return (
    <>
      <Navbar />
      <div
        style={{
          position: "relative",
          top: "-70px",
          padding: "1rem 2rem",
        }}
      >
        <Hero />
        <About />
        <Projects />
      </div>
    </>
  );
}

export default App;
