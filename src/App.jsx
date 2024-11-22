import { Routes, Route } from "react-router-dom";
import "./app.css";
import Home from "./pages/Home";
import CaseStu from "./pages/caseStu";
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
