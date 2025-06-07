import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Contacts from "./pages/Contacts";
import Navbar from "./components/Navbar";
import ResponsiveMenu from "./components/ResponsiveMenu";
import Hero from "./components/Hero";
import Menus from "./components/Menus";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar/>

      {/* <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/about' element={<About />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/contacts' element={<Contacts />} />
      </Routes> */}
      <Hero/>
      <Menus/>
      <Banner/>
      <Footer/>
    </main>
  );
};

export default App;

