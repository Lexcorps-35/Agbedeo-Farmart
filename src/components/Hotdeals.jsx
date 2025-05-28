import React from 'react'

const Hotdeals = () => {
  return (
    <div className='mt-[35rem]'>

<section id='Hot'>
<div class="min-h-screen bg-gray-50 p-6">
  
  <div class="mb-8">
    <h1 class="text-4xl font-bold text-gray-900 font-serif">Hot deals for you 🔥  </h1>
    <p class="text-gray-600 mt-2">Shop your Groceries and house needs directly from importers</p>
  </div>

  
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
    
    <div class="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500" data-aos="fade-up">
      <h2 class="text-xl font-semibold text-gray-800">1.5% cashback</h2>
      <p class="text-gray-600 mt-2">Earn a 5% cashback reward on every item and fresh produce purchase you make!</p>
    </div>

    
    <div class="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500" data-aos="fade-up" data-aos-delay="300">
      <h2 class="text-xl font-semibold text-gray-800">30-Day Payment Terms</h2>
      <p class="text-gray-600 mt-2">Enjoy flexible 30-day payment terms with no added interest!</p>
    </div>

   
    <div class="bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-500" data-aos="fade-up" data-aos-delay="600">
      <h2 class="text-xl font-semibold text-gray-800">Save money</h2>
      <p class="text-gray-600 mt-2">Get the best deals on Fresh Products, vegetables, and Household Essentials at unbeatable prices!</p>
    </div>
  </div>


</div>

    </section>

    </div>
  )
}

export default Hotdeals