import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AddNotes from "./pages/AddNotes";
import DetailNotes from "./pages/DetailNotes";
import Home from "./pages/Home";
import Product from "./pages/Product";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Notes" element={<Product />} />
        <Route path="/addNotes" element={<AddNotes />} />
        <Route path="/getIdNotes/:id" element={<DetailNotes />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
