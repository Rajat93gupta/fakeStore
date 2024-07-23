import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Indexx from "./component/Indexx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Cart from "./component/Cart";
import SinglePage from "./component/SinglePage";
import Footer from "./component/Footer";
import About from "./component/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<SinglePage/>} />
        <Route path="/About" element={<About/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
