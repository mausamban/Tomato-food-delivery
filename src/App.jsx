import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Err from "./pages/Err";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="App h-screen w-screen animate-fadeApp">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<Err />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
