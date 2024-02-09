import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Login from "./components/Login"; // Assicurati di avere un componente Login
import Register from "./components/Register";

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/" element={<Home/>} />
        {/* Aggiungi ulteriori rotte qui se necessario */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;



