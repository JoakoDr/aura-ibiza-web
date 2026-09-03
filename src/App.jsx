import { Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Villas from "./pages/Villas";
import Yachts from "./pages/Yachts";
import Planificar from "./pages/Planificar";
import YachtBooking from "./pages/YachtBooking";
import VillaBooking from "./pages/VillaBooking";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/villas" element={<Villas />} />
        <Route path="/yachts" element={<Yachts />} />
        <Route path="/planificar" element={<Planificar />} />
        <Route path="/yacht-booking" element={<YachtBooking />} />
        <Route path="/villa-booking" element={<VillaBooking />} />
      </Routes>

      <WhatsAppButton />
    </>
  );
}

export default App;