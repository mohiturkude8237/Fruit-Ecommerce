import React from "react";
import { IoBagHandleOutline } from "react-icons/io5";
import { assets } from "../assets/assets";
import {motion} from "framer-motion";
import { FadeRight } from "../Utility/animation";
import { FadeUp } from "../Utility/animation";

const Hero = () => {
  return (
      <section className="ml-2 sm:ml-4 md:ml-8 lg:ml-16 mt-10">
        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative">
          {/* Brand Info */}
          <div className="flex flex-col justify-center py-12 md:py-0 relative z-10">
            <div className="text-center md:text-left space-y-6 lg:max-w-[400px]">
              <motion.h1 variants={FadeRight(0.6)} 
              initial="hidden"
              animate="visible"
              className="text-5xl lg:text-6xl font-bold leading-relaxed averia-serif-libre-regular mt-8">
                Healthy
                <br />
                Fresh <span className="text-orange-600">Fruits!</span>
              </motion.h1>
              <motion.p variants={FadeRight(0.9)} initial="hidden" animate="visible"  className="text-2xl tracking-wide">
                Order Now For Fresh Healthy Life  
              </motion.p>
              <motion.p variants={FadeRight(1.2)} initial="hidden" animate="visible" className="text-gray-400">
                Healthy and yummy food for fresh morning breakfast.Eat Daily for
                good health and mind Order now and get 20% off on your first
                order.
              </motion.p>
              {/* button section */}
              <motion.div variants={FadeRight(1.5)} initial="hidden" animate="visible" className="flex justify-center md:justify-start">
                <button className=" bg-red-500 text-white font-semibold py-3 px-6 rounded-xl shadow-[0px_10px_14px_-7px_#de0029] hover:!scale-110 duration-300 flex gap-2 items-center">
                  <span>
                    <IoBagHandleOutline />
                  </span>
                  Order Now
                </button>
              </motion.div>
            </div>
          </div>
          {/* Hero Images */}
          <div className="flex justify-center items-center">
            <motion.img initial={{opacity:0,x:200,rotate:75}}
              animate={{opacity:1,x:0,rotate:0}}
              transition={{duration:1,delay:0.2}}
              src={assets.fruit_plate}
              alt=""
              className="w-[350px] md:w-[550px] drop-shadow "
            />
          {/* Leaf Image */}
          <div className="absolute top-20 md:top-20 right-1/2  opacity-100 rotate-[40deg]">
            <motion.img initial={{opacity:0,y:-200,rotate:75}} animate={{opacity:1,y:0,rotate:0}} transition={{duration:1,delay:1.5}} src={assets.leaf} alt="" className="blur md:blur-none w-full md:max-w-[300px]"/>

          </div>
        </div>
        </div>
      </section>
  );
};

export default Hero;
