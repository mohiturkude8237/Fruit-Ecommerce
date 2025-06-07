import { menu, nav, title } from "framer-motion/client";
import React from "react";
import { FaLeaf } from "react-icons/fa";
import { MdMenu, MdOutlineShoppingCart } from "react-icons/md";
import ResponsiveMenu from "./ResponsiveMenu";

const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Products",
    link: "#",
  },
  {
    id: 3,
    title: "About",
    link: "#",
  },
  {
    id: 4,
    title: "Shop",
    link: "#",
  },
  {
    id: 5,
    title: "Contacts",
    link: "#",
  },
];

const Navbar = () => {
  const primary = "red";
  const [open,setOpen]=React.useState(false);
  return (
    <>
      <nav>
        <div className="w-full flex justify-between items-center py-4 md:pt-4 bg-gradient-to-r from-lime-500 to-green-500 text-white shadow-md fixed top-0 left-0 z-50 opacity-70 backdrop-blur-md ">
          {/* Logo section */}
          <div className="text-xl md:text-2xl flex items-center gap-2 font-bold uppercase ml-10">
            <p className="text-orange-600">Fruit</p>
            <p className="text-yellow-200">Store</p>
            <FaLeaf className="text-white" />
          </div>
          {/* Menu section */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-6 text-white">
              {NavbarMenu.map((menu) => (
                <li key={menu.id}>
                  <a
                    href={menu.link}
                    className="inline-block py-1 px-3 hover:text-yellow-200 hover:shadow-[0_5px_0_-1px_#c9c630] font-semibold"
                  >
                    {menu.title}
                  </a>
                </li>
              ))}
              <button className="text-2xl hover:bg-red-500 hover:text-white rounded-full p-2 duration-200">
                <MdOutlineShoppingCart />
              </button>
            </ul>
          </div>
          {/* Mobile Hamburger Menu Section */}
          <div className="md:hidden" onClick={()=>setOpen(!open)}>
            <MdMenu className="text-4xl" />
          </div>
        </div>
      </nav>
      {/* Mobile Menu section */}
      <ResponsiveMenu open={open}/>
    </>
  );
};

export default Navbar;
