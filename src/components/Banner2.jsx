import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";
import { FadeUp } from "../Utility/animation";

const Banner2 = () => {
  return (
    <section className="bg-gray-200 m-4 md:m-10 rounded-2xl shadow-[0px_10px_14px_-7px_rgba(222,0,41,0.3)]">
      <div className="max-w-5xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-4 py-14 items-center">
        {/* Banner Info */}
        <div className="flex flex-col justify-center">
          <div className="text-left space-y-4 px-2 md:px-0 max-w-full md:max-w-[500px] mb-8">
            <motion.h1
              variants={FadeUp(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center md:text-left text-3xl lg:text-4xl uppercase font-bold text-orange-500 patua-one-regular"
            >
              Bountiful Fruits
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
              viewport={{ once: true }}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab minus
              at temporibus et, perferendis expedita quia necessitatibus velit,
              tempora nesciunt laborum dolore minima eveniet cumque quisquam
              esse. Fuga deleniti aspernatur consequatur esse nisi magni ut
              perferendis sit asperiores, minima laboriosam laudantium laborum
              dicta est, voluptas odio temporibus harum voluptates voluptatum?
            </motion.p>

            {/* Button */}
            <motion.div
              variants={FadeUp(1.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex justify-center md:justify-start"
            >
              <button className="bg-red-500 text-white font-semibold py-3 px-6 rounded-xl shadow-[0px_10px_14px_-7px_#de0029] hover:!scale-110 duration-300">
                Download the App
              </button>
            </motion.div>
          </div>
        </div>
        {/* Banner Image */}
        <div className="flex justify-center md:justify-end items-center">
          <motion.img
            initial={{ opacity: 0, x:200,rotate: 75 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            src={assets.fruit_plate2}
            alt="fruit splash"
            className="w-full max-w-[300px] md:max-w-[400px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner2;
