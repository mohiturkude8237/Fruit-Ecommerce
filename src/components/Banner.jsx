import { section } from "framer-motion/client";
import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import { FadeLeft, FadeRight, FadeUp } from "../Utility/animation";

const Banner = () => {
  return (
    <section>
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-y-0 md:gap-x-4 py-14">
        {/* Banner Image */}
        <div className="flex justify-center md:justify-end items-center gap-5 md:pr-10">
          <img
            src={assets.fruits_splash}
            alt=""
            className="w-[300px] md:max-w-[400px] h-full object-cover"
          />
        </div>
        {/* Banner Info */}
        <div className="flex flex-col justify-center">
          <div className="text-left space-y-4 sm:px-6 lg:max-w-[400px] px-10 md:px-0 max-w-full">
            <motion.h1
              variants={FadeUp(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center md:text-left text-3xl lg:text-4xl uppercase font-bold justify-center"
            >
              Brand Info
            </motion.h1>
            <motion.p
              variants={FadeUp(0.7)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              deleniti quod autem cupiditate quibusdam saepe commodi ex dolorem
              quam. Fuga voluptates sapiente iure quibusdam necessitatibus
              soluta placeat quidem, quasi quis?
            </motion.p>
            <motion.p
            variants={FadeUp(0.9)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }
            }
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab minus
              at temporibus et, perferendis expedita quia necessitatibus velit,
              tempora nesciunt laborum dolore minima eveniet cumque quisquam
              esse. Fuga deleniti aspernatur consequatur esse nisi magni ut
              perferendis sit asperiores, minima laboriosam laudantium laborum
              dicta est, voluptas odio temporibus harum voluptates voluptatum?
            </motion.p>
            {/* button section */}
            <motion.div
              variants={FadeUp(1.1)}
              initial="hidden"
              animate="visible"
              className="flex justify-center md:justify-start"
            >
              <button className=" bg-red-500 text-white font-semibold py-3 px-6 rounded-xl shadow-[0px_10px_14px_-7px_#de0029] hover:!scale-110 duration-300 ">
                Learn More
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
