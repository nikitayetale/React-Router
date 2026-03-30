import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Admin from "./Pages/Admin";
import About from "./Pages/About";
import Contact from "./Pages/contact";
import "./Pages/Contact.css";
import AddCake from "./Components/AddCake";
import CakeList from "./Components/CakeList";
import "./App.css";
import { useState } from "react";

function App() {
  const  [cakes, setCake] = useState([]);

  const addCake = (cake) => {
    setCake([...cakes, cake]);
  };
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/"element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact"  element={<Contact />} />
      <Route path="/addcakes" element={<AddCake addCake={addCake} />} />
      <Route path="/cakes" element={<CakeList cakes={cakes} />} />
    </Routes>
    </BrowserRouter>

    
  );
}

export default App;