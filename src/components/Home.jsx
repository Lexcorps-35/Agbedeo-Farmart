import React from 'react'

const Home = () => {
  return (
      <div>
          
<section id='home'>
    <div className='' data-aos="fade-left">
        <img 
            src="https://media.istockphoto.com/id/1398965606/photo/father-and-daughter-shopping-in-a-grocery-store.jpg?s=612x612&w=0&k=20&c=irfHWhH_DeaUp7fopzromq39mH8-QFYrnV04UbXr6NU="
            alt="header" 
            className='float-right h-[30rem] md:w-[60rem] object-cover'
        />
    </div>
    <div>
        <div 
            className='absolute inset-0 rounded-2xl p-4  h-[28rem] md:h-[28rem] w-[15rem] md:w-[33rem] bg-white/50 backdrop-blur-sm mt-[5rem]   md:mx-0' 
            data-aos="fade-right" 
            data-aos-delay="300"
        >
            <div className='' data-aos="fade-up">
                <h1 className='text-4xl md:text-6xl font-extrabold font-serif'>Agboedo: Your One-Stop Grocery Shop</h1>
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

export default Home