import { motion, AnimatePresence } from 'framer-motion';
import React from 'react'

const ResponsiveMenu = ({ open }) => {
  return (
    <AnimatePresence mode="wait">
   {open && (
<motion.div
initial={{ opacity: 0, y: -100}}
animate={{ opacity: 1, y: 0 }}
exit={{ opacity: 0, y: -100 }}
transition={{ duration: 0.3}}
className="absolute top-20 left-0 w-full h-[calc(100vh-5rem)] z-20"
>
<div className='text-xl font-semibold bg-blue-800 text-white py-10
 m-6 rounded-3xl'>
    <ul className='flex flex-col justify-center items-center gap-5'>
        <a href="#home"><li className='hover:text-red-800 cursor-pointer'>Home</li></a>
        <a href="#hot"><li className='hover:text-red-800 cursor-pointer'>Deals</li></a>
        <a href="#product"><li className='hover:text-red-800 cursor-pointer'>Product</li></a>
        <a href="#contact"><li className='hover:text-red-800 cursor-pointer'>Contact</li></a>
    </ul>
</div>
</motion.div>   
)};
    </AnimatePresence>
  )
}

export default ResponsiveMenu