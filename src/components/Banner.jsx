import { section } from "framer-motion/client";
import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import { FadeLeft, FadeRight, FadeUp } from "../Utility/animation";

const Banner = () => {
  return (
    <section>
      <div className="container grid grid-cols-1 md:grid-cols-2 space-y-8 md:space-y-0 py-14">
        {/* Banner Image */}
        <div className="flex justify-center items-center">
          <img
            src={assets.fruits_splash}
            alt=""
            className="w-[300px] md:max-w-[400px] h-full object-cover"
          />
        </div>
        {/* Banner Info */}
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
            <h1>Brand Info</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              deleniti quod autem cupiditate quibusdam saepe commodi ex dolorem
              quam. Fuga voluptates sapiente iure quibusdam necessitatibus
              soluta placeat quidem, quasi quis?
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab minus
              at temporibus et, perferendis expedita quia necessitatibus velit,
              tempora nesciunt laborum dolore minima eveniet cumque quisquam
              esse. Fuga deleniti aspernatur consequatur esse nisi magni ut
              perferendis sit asperiores, minima laboriosam laudantium laborum
              dicta est, voluptas odio temporibus harum voluptates voluptatum?
            </p>
            {/* button section */}
            <motion.div
              variants={FadeUp(1.5)}
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
