import { Navbar, Hero, About } from "./components";

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
      </div>
    </>
  );
}

export default App;
