import { useState } from "react";
import "./App.css";
import Details from "./pages/Details";
import Cart from "./pages/Cart";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Payment from "./pages/Payment";
import PaymentDetails from "./pages/PaymentDetails";
function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Details />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/payment-details" element={<PaymentDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
