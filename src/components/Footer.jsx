// import React from "react";
// import { FaFacebook, FaInstagram, FaTwitter, FaLeaf } from "react-icons/fa";
// import { motion } from "framer-motion";
// import { footer } from "framer-motion/client";

// const Footer = () => {
//   return (
//     <footer>
//       <div className="w-full bg-gray-400">
//         {/* Logo Section */}
//         <div className="text-xl md:text-2xl flex items-center gap-2 font-bold uppercase ml-10">
//           <p className="primary">Fruit</p>
//           <p className="secondary">Store</p>
//           <FaLeaf className="text-green-500" />
//         </div>
//         {/* Social icons section */}
//         <div></div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// import React from "react";
// import { FaFacebook, FaInstagram, FaTwitter, FaLeaf } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-400 w-full">
//       <div className="flex flex-col md:flex-row justify-between items-center py-6 px-4 md:px-10 text-white">
//         {/* Logo Section */}
//         <div className="flex items-center gap-2 text-xl md:text-2xl font-bold uppercase">
//           <p className="text-black">Fruit</p>
//           <p className="text-green-700">Store</p>
//           <FaLeaf className="text-green-500" />
//         </div>

//         {/* Social Icons */}
//         <div className="flex gap-4 mt-4 md:mt-0 text-xl">
//           <FaFacebook className="hover:text-blue-600 cursor-pointer" />
//           <FaInstagram className="hover:text-pink-500 cursor-pointer" />
//           <FaTwitter className="hover:text-sky-500 cursor-pointer" />
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLeaf } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-600 to-lime-500 w-full">
      <div className="flex flex-col md:flex-row justify-between items-center py-6 px-4 md:px-10 text-white">
        {/* Logo Section */}
        <div className="flex items-center gap-2 text-xl md:text-2xl font-bold uppercase">
          <p className="text-white">Fruit</p>
          <p className="text-yellow-200">Store</p>
          <FaLeaf className="text-white" />
        </div>

        {/* Ownership section */}
        <div className="font-semibold text-center mt-4 md:mt-0">
          <p className="text-white mb-4">© 2025 Fruit Store. All rights reserved.</p>
          <h1>Designed & Developed By Mohit Urkude</h1>
        </div>

        

        {/* Social Icons */}
        <div className="flex gap-4 mt-4 md:mt-0 text-2xl">
          <FaFacebook className="hover:text-blue-200 cursor-pointer transition" />
          <FaInstagram className="hover:text-pink-300 cursor-pointer transition" />
          <FaTwitter className="hover:text-sky-300 cursor-pointer transition" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
