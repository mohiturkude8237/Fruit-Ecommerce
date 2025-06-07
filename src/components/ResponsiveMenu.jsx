import { div } from 'framer-motion/client'
import React from 'react'
import {motion,AnimatePresence} from "framer-motion"
const ResponsiveMenu = ({open}) => {
  return (
    <AnimatePresence mode="wait">
      {
        open &&(
          <motion.div 
          initial={{opacity:0,y:-100}}
          animate={{opacity:1,y:0}}
          exit={{opacity:0,y:-100}}
          transition={{duration:0.3}}
          className='absolute  top-20 left-0 w-full h-screen z-20'>
            <div className='text-xl font-semibold uppercase bg-red-600 text-white py-10 m-6 rounded-3xl '>
              <ul className='flex flex-col items-center gap-10'>
                <li> <a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/service">Services</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
          </motion.div>
        )
      }
    </AnimatePresence>
  )
}

export default ResponsiveMenu
