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
        <nav className='flex justify-between items-center
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
       < IoSearchSharp className='absolute left-3 text-2xl text-shadow-gray-500'/>
         <input type="text" placeholder='Search...' className='py-1 pl-10 rounded-xl 
         border border-gray-300 focus:outline-none focus:border-2 focus:border-blue-600 transition-all duration-300
         '/>
       </div>
          <div className='md:hidden block text-xl cursor-pointer fixed top-4 right-4 p-2 text-white' onClick={() => setIsOpen(!isOpen)}>
         {isOpen ? <IoClose/> : <RiMenu3Line />}
       </div>
          </nav>
        <ResponsiveMenu open={isOpen} />
      
  

        <section id='home'>
    <div className='' data-aos="fade-left">
        <img 
            src="https://media.istockphoto.com/id/1398965606/photo/father-and-daughter-shopping-in-a-grocery-store.jpg?s=612x612&w=0&k=20&c=irfHWhH_DeaUp7fopzromq39mH8-QFYrnV04UbXr6NU="
            alt="header" 
            className='float-right h-[30rem] w-full md:w-[60rem] object-cover'
        />
    </div>
    <div>
        <div 
            className='absolute inset-0 rounded-2xl p-4  h-auto md:h-[28rem] w-full md:w-[33rem] bg-white/50 backdrop-blur-sm mt-[5rem]  mx-4 md:mx-0' 
            data-aos="fade-right" 
            data-aos-delay="300"
        >
            <div className='' data-aos="fade-up">
                <h1 className='text-3xl md:text-6xl font-extrabold font-serif'>Agboedo: Your One-Stop Grocery Shop</h1>
                <p className='mt-4 text-gray-700 font-bold text-base md:text-2xl'>
                    Enjoy a convenient and pleasant shopping experience with high-quality products and exceptional customer service, all tailored to meet your everyday grocery needs.
                </p>
            </div>
        </div>
    </div>
</section>
    </div>
    
  )
}

export default Navbar