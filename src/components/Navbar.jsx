import React, { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { IoSearchSharp } from "react-icons/io5";
import { RiMenu3Line } from "react-icons/ri";
import ResponsiveMenu from './ResponsiveMenu';
import { IoClose } from "react-icons/io5";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

  return (
    <div>
        <nav className='flex justify-between items-center w-full
        text-black py-4 px-8 md:px-32 bg-blue-800/50 drop-shadow-md' data-aos="fade-down">
       <a href="#" className='hover:scale-105 transition-all text-amber-700 font-extrabold font-serif text-3xl md:text-4xl'>Agboedo</a>
       <ul className='hidden md:flex items-center gap-12
       font-semibold text-base text-red-600'>
        <a href="#home"><li className='p-1 hover:bg-blue-500
        hover:text-red-800 rounded-md cursor-pointer'>Home</li></a>
        <a href="#Hot"><li className='p-1 hover:bg-blue-500
        hover:text-red-800 rounded-md cursor-pointer'>About</li></a>
        <a href="#product"><li className='p-1 hover:bg-blue-500
        hover:text-red-800 rounded-md  cursor-pointer'>Product</li></a>
        <a href="#contact"><li className='p-1 hover:bg-blue-500
        hover:text-red-800 rounded-md cursor-pointer'>Contact</li></a>
              </ul>
       <div className='relative hidden md:flex items-center 
       justify-center gap-3'>
       < IoSearchSharp className=' absolute left-3 text-2xl text-shadow-gray-500'/>
         <input type="text" placeholder='Search...' className='py-1 pl-10 rounded-xl 
         border border-gray-300 focus:outline-none focus:border-2 focus:border-blue-600 transition-all duration-300
         '/>
       </div>
          <div className='md:hidden block text-xl cursor-pointer fixed top-4 right-4 p-2 text-white' onClick={() => setIsOpen(!isOpen)}>
         {isOpen ? <IoClose/> : <RiMenu3Line />}
       </div>
          </nav>
        <ResponsiveMenu open={isOpen} />
      
  

        
    </div>
    
  )
}

export default Navbar
