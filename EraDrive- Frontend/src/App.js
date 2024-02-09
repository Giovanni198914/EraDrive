import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./cartContext";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Mission from "./components/Mission";
import ChiSiamo from "./components/ChiSiamo";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/mission" element={<Layout><Mission /></Layout>} />
          <Route path="/chi-siamo" element={<Layout><ChiSiamo /></Layout>} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;




