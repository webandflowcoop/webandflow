import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.tsx";
import Home from "./pages/Home.tsx";
// import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import Portfolio from "./pages/Portfolio.tsx";
import NotFound from "./pages/NotFound.tsx";
import Footer from "./components/Footer.tsx";
import "./App.css";

function App() {
  return (
    <div className="root">
      <Navbar />
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
