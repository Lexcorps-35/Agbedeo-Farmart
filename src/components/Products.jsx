import React from 'react'

const Products = () => {
  return (
    <div>
        <section id='product'>
        <div class="max-w-6xl mx-auto p-6 md:p-8">
  
  <h1 class="text-4xl font-bold text-gray-900 mb-12 text-center">Products</h1>

  
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    
    <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow hover:bg-gray-100">
      <div class="p-6">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">Dairy Products</h2>
        <p class="text-3xl font-bold text-green-600">$550</p>
        <img src="https://media.istockphoto.com/id/1469681130/photo/supermarket-shopping-and-fridge-with-groceries-dairy-product-and-retail-with-food.jpg?s=612x612&w=0&k=20&c=KQhx3dmboP4667SvJ47TqiKcaiWGIwUcwoA5edU89c4=" alt="" className='mt-3 rounded-md'/>
      </div>
    </div>

    
    <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow hover:bg-gray-100">
      <div class="p-6">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">Meat & Seafood</h2>
        <p class="text-3xl font-bold text-green-600">$600</p>
        <img src="https://media.istockphoto.com/id/1425391860/photo/pieces-of-fresh-tuna-fish-for-sale-in-a-supermarket-chilled-refrigerator-display-cabinet.jpg?s=612x612&w=0&k=20&c=vqlq2cXTAl9DhdyG0XuVSm7eJZOYBWmTct9egeHSa6w=" alt=""  className='mt-3 rounded-md'/>
            
      </div>
    </div>

   
    <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow hover:bg-gray-100">
      <div class="p-6">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">Fresh Produce</h2>
        <p class="text-3xl font-bold text-green-600">$500</p>
        <img src="https://media.istockphoto.com/id/1883543200/photo/fresh-green-vegetable-on-shelf-in-grocery-store-for-sale.jpg?s=612x612&w=0&k=20&c=YgJpozs_zaMayqEUk3cidvTm8RWYdKLEKrkX9jY_4DI=" alt="" className='mt-3 rounded-md'/>
           
      </div>
    </div>

    <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow hover:bg-gray-100">
      <div class="p-6">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">Frozen Food</h2>
        <p class="text-3xl font-bold text-green-600">$450</p>
        <img src="https://media.istockphoto.com/id/1426874952/photo/refrigerator-frozen-pastry-vegetables-and-birthday-cakes.jpg?s=612x612&w=0&k=20&c=-qV9kJwC2da3Qw70A4wb1Fa8SLuaZVqxVBd1eRXNOQw=" alt="" className='mt-3 rounded-md'/>
           
      </div>
    </div>

    <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow hover:bg-gray-100">
      <div class="p-6">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">Pantry Staples</h2>
        <p class="text-3xl font-bold text-green-600">$550</p>
        <img src="https://media.istockphoto.com/id/1371363452/photo/plastic-containers-with-various-cereals-and-grains-food-storage-concept.jpg?s=1024x1024&w=is&k=20&c=iczVPB5dzLzZmvXUnVYvyfDS0ZomVGYIJJayhO5e3DU=" alt="" className='mt-3 rounded-md'/>
           
      </div>
    </div>

    <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow hover:bg-gray-100">
      <div class="p-6">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">Beverages</h2>
        <p class="text-3xl font-bold text-green-600">$300</p>
        <img src="https://media.istockphoto.com/id/1467288340/photo/juice-cans-and-bottles-in-fridge-at-supermarket.jpg?s=612x612&w=0&k=20&c=9G4WrrWtOQZV8pvcuMzSN_gx7aWhm5DNvJARgF2HRTc=" alt="" className='mt-3 rounded-md'/>
           
      </div>
    </div>
  </div>
</div>
<a href="#"><button className='rounded-lg bg-amber-200 py-2 px-3 hover:bg-amber-500'>Make Payment</button></a>

        </section>
    </div>
  )
}

export default Products