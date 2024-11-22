import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import CaseStu from "./pages/CaseStu";
import Testimony from "./pages/Testimony";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Notfound from "./pages/Notfound";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/casestudies" element={<CaseStu />} />
        <Route path="/testimonials" element={<Testimony />} />
        <Route path="*" element={<Notfound />} />
        {/* * stand not found page  */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
