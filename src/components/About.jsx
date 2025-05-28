import React from 'react'

export const About = () => {
  return (
    <div>

<section id='about'>
        
<div class="  md:p-8 bg-white">
  
<div className="mb-12 px-4 sm:px-0">
  <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-center gap-8 mt-10 md:mt-20">
  
    <div className="w-full md:w-1/2">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4" data-aos="fade-right">
        About Us
      </h1>
      <p className="text-gray-400 text-base sm:text-xl font-bold w-full md:w-[35rem]" data-aos="fade-right">
        Agboedo is your go-to marketplace for Groceries, genuinely Fresh Products, and quality Household Essentials in Nnewi, Anambra State Nigeria. We connect buyers directly with trusted importers and skilled sellers, ensuring quality and affordability.
      </p>
    </div>

    <div className="w-full md:w-auto text-center md:text-right" data-aos="fade-left">
      <button className="px-4 py-2 sm:px-6 sm:py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors w-full md:w-auto">
        Learn More
      </button>
    </div>
  </div>
</div>
  

  <div class="border-b border-gray-200 my-8"></div> 

  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-25 w-full mb-12 mx-auto px-4 max-w-4xl'>
  {/* Item 1 */}
  <div className="mb-8">
    <div className="flex items-center mb-4">
      <span className="text-xl md:text-2xl font-bold text-red-900 mr-3">1.</span>
      <h2 className="text-xl md:text-2xl font-bold text-red-900">Who we are</h2>
    </div>
    <p className="text-gray-500 pl-10 md:pl-12 text-sm md:text-base" data-aos="fade-up">
      Agboedo is a trusted e-commerce platform - specializing in sales of Groceries; pantry staples, and Household Essentials. Based in Nnewi, we bridge the gap between buyers and verified investors over the world.
    </p>
  </div>

  {/* Item 2 */}
  <div className="mb-8">
    <div className="flex items-center mb-4">
      <span className="text-xl md:text-2xl font-bold text-red-900 mr-3">2.</span>
      <h2 className="text-xl md:text-2xl font-bold text-red-900">What do we do</h2>
    </div>
    <p className="text-gray-500 pl-10 md:pl-12 text-sm md:text-base" data-aos="fade-up" data-aos-delay="300">
      We provide a seamless shopping experience for immediate buyers, offering a wide range of groceries, genuine Fresh Products, and professional services—all from trusted suppliers and merchants.
    </p>
  </div>

  {/* Images - now properly responsive */}
  <div className='mb-8 md:order-4 lg:order-3 -mt-15'>
    <div className='flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-28'>
      <img 
        src="https://media.istockphoto.com/id/871227828/photo/unrecognizable-woman-shops-for-produce-in-supermarket.jpg?s=612x612&w=0&k=20&c=MIvrDLHynihoCE5hOQSJbPDfXV2eMYxTPmbCe_hoaYE=" 
        alt="Woman shopping for groceries" 
        className='rounded-lg w-full h-80 object-cover'
      />
      <img 
        src="https://media.istockphoto.com/id/1542614865/photo/man-shopping-vegetables-in-groceries-store.jpg?s=612x612&w=0&k=20&c=e4cvmZDGoWJjzfzzAX4CMwU-xmxjUxJ1cRa5GUU3yFo=" 
        alt="Man shopping vegetables" 
        className='rounded-lg w-full h-80 object-cover'
      />
    </div>
  </div>

  {/* Item 3 */}
  <div className="mb-8 md:-mt-0 lg:-mt-0">
    <div className="flex items-center mb-4">
      <span className="text-xl md:text-2xl font-bold text-red-900 mr-3">3.</span>
      <h2 className="text-xl md:text-2xl font-bold text-red-900">How do we help</h2>
    </div>
    <p className="text-gray-500 pl-10 md:pl-12 text-sm md:text-base" data-aos="fade-up">
      By connecting customers directly with importers and sellers, we eliminate middlemen, reduce costs, and ensure quick access to high-quality products and services. Our flexible payment options and cashback rewards make purchases even more convenient.
    </p>
  </div>

  {/* Item 4 */}
  <div className="mb-8 md:-mt-0 lg:-mt-20">
    <div className="flex items-center mb-4">
      <span className="text-xl md:text-2xl font-bold text-red-900 mr-3">4.</span>
      <h2 className="text-xl md:text-2xl font-bold text-red-900">Create Success Story</h2>
    </div>
    <p className="text-gray-500 pl-10 md:pl-12 text-sm md:text-base" data-aos="fade-up" data-aos-delay="300">
      Agboedo has transformed Grocery shopping in Nnewi by making Fresh Products and utensils more accessible and affordable. Our growing community of satisfied riders, importers, and sellers reflects our commitment to quality service and customer satisfaction.
    </p>
  </div>
</div>
</div>
    </section>

    </div>
  )
}
