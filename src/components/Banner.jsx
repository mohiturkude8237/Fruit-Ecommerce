import { section } from "framer-motion/client";
import React from "react";
import { assets } from "../assets/assets";

const Banner = () => {
  return (
    <section>
      <div className="container">
        {/* Banner Image */}
        <div>
          <img src={assets.fruits_splash} alt="" className="w-[300px]" />
        </div>
        {/* Banner Info */}
      </div>
    </section>
  );
};

export default Banner;
