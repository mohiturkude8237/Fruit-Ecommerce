import { img, section, title } from "framer-motion/client";
import React from "react";
import apple from "../assets/fruits/apple.png";
import orange from "../assets/fruits/orange.png";
import avocado from "../assets/fruits/avocado.png";
import cherry from "../assets/fruits/cherry.png";
const MenusData = [
  {
    id: 1,
    title: "Fresh Red Apples",
    link: "/",
    price: "$3.99",
    img: apple,
  },
  {
    id: 2,
    title: "Fresh Oranges",
    link: "/",
    price: "$4.99",
    img: orange,
  },
  {
    id: 3,
    title: "Fresh Avocado",
    link: "/",
    price: "$5.99",
    img: avocado,
  },
  {
    id: 4,
    title: "Fresh Cherries",
    link: "/",
    price: "$2.99",
    img: cherry,
  },
];

const Menus = () => {
  return (
    <section>
      <div className="container pt-12 pb-20">
        <h1 className="text-2xl font-bold text-left pb-10 uppercase">
          Our Menu
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {MenusData.map((menu) => (
            <div className="bg-white rounded-3xl px-4 py-2 shadow-[0_0_22px_0_rgba(0,0,0,0.15)] flex flex-row justify-around items-center gap-3">
              <img
                src={menu.img}
                alt=""
                className="w-[60px] mb-4 scale-125 transform -translate-y-6"
              />
              <div>
                <h1 className="text-lg font-semibold">{menu.title}</h1>
                <p className="text-lg font-semibold text-orange-600">{menu.price}</p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Menus;
