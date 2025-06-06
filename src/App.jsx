import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Contacts from "./pages/Contacts";
import Navbar1 from "./components/Navbar";
import ResponsiveMenu from "./components/ResponsiveMenu";
import Hero1 from "./components/Hero";

const App = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />

      {/* <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/about' element={<About />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/contacts' element={<Contacts />} />
      </Routes> */}
      <Hero/>
    </main>
  );
};

export default App;
