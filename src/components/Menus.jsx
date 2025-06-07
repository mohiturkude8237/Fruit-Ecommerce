import { img, section, title } from "framer-motion/client";
import React from "react";
import apple from "../assets/fruits/apple.png";
import orange from "../assets/fruits/orange.png";
import avocado from "../assets/fruits/avocado.png";
import cherry from "../assets/fruits/cherry.png";
import { delay, motion } from "framer-motion";
import {FadeLeft} from "../Utility/animation.jsx"; 
const MenusData = [
  {
    id: 1,
    title: "Fresh Red Apples",
    link: "/",
    price: "$3.99",
    img: apple,
    delay: 0.3,
  },
  {
    id: 2,
    title: "Fresh Oranges",
    link: "/",
    price: "$4.99",
    img: orange,
    delay: 0.6,
  },
  {
    id: 3,
    title: "Fresh Avocado",
    link: "/",
    price: "$5.99",
    img: avocado,
    delay: 0.9,
  },
  {
    id: 4,
    title: "Fresh Cherries",
    link: "/",
    price: "$2.99",
    img: cherry,
    delay: 1.2,
  },
];

const Menus = () => {
  return (
    <section className="bg-[#F8F8F8] ml-2 text-center sm:ml-4 md:ml-8 lg:ml-16">
      <div className="container pt-30 pb-20">
        <motion.h1 
        initial={{opacity: 0, x: -200}}
        whileInView={{opacity: 1, x: 0}}
        transition={{duration: 1,delay: 0.3}}
        className="text-2xl font-bold md:text-left pb-10 uppercase">
          Our Menu
        </motion.h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {MenusData.map((menu) => (
            <motion.div 
            variants={FadeLeft(menu.delay)}
            initial="hidden"
            whileInView={"visible"}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="w-[90%] max-w-[300px] mx-auto md:max-w-none  bg-gray-200 rounded-3xl   py-3 shadow-[0_0_22px_0_rgba(0,0,0,0.15)] flex flex-row items-center justify-center  gap-2 md:gap-4 hover:shadow-[0_0_22px_0_rgba(0,0,0,0.25)] transition-all duration-300 ease-in-out relative">
              <img
                src={menu.img}
                alt=""
                className="w-[60px] mb-4 scale-110 transform -translate-y-6 mt-10"
              />
              <div>
                <h1 className="text-lg font-semibold">{menu.title}</h1>
                <p className="text-lg font-semibold text-orange-600">{menu.price}</p>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Menus;
