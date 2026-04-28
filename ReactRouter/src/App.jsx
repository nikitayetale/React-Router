import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Admin from "./Pages/Admin";
import About from "./Pages/About";
import Contact from "./Pages/contact";
import "./Pages/Contact.css";
import CakeList from "./Components/CakeList";
import OrderPanel from "./Pages/OrderPanel";

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
      <Route path="/about" element={<About />} />
      <Route path="/contact"  element={<Contact />} />
    <Route path="/cakes" element={<CakeList cakes={cakes} />} />
    <Route path="/Admin"element={<Admin />}/>
    <Route path="/OrderPanel"element={<OrderPanel/>}/>
    </Routes>
    </BrowserRouter>

    
  );
}

export default App;