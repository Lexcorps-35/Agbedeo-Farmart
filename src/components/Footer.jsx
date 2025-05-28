import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
        <section>
    
        <div class="bg-blue-500/50 text-gray-800">
  
  <div class="max-w-7xl mx-auto px-6 py-12 md:px-8">
    
    <div class="mb-12 md:mb-16">
      <h1 class="text-3xl font-bold text-red-600 mb-4">FreshMart</h1>
      <p class="text-lg max-w-md">
        Join us in revolutionizing<br/>
        Grocery shopping with quality<br/>
        Products, genuine pantry<br/>
        staples, and quality Household<br/>
        Essentials—all at unbeatable prices.
      </p>
      <div class="mt-8 flex space-x-4">
  <a href="#"><FaFacebook /></a>
  <a href="#"><FaSquareXTwitter /></a>
  <a href="#"><FaSquareInstagram /></a>
  <a href="#"><FaLinkedin /></a>
</div>
    </div>

     
    <div className='grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16'>
      
      <div>
        <h2 class="text-xl font-extrabold mb-4">Services</h2>
        <ul class="space-y-2 text-gray-600 font-bold">
          <li><a href="#" class="hover:text-black transition">Contact Us</a></li>
          <li><a href="#" class="hover:text-black transition">Press</a></li>
          <li><a href="#" class="hover:text-black transition">Payroll</a></li>
          <li><a href="#" class="hover:text-black transition">Library</a></li>
          <li><a href="#" class="hover:text-black transition">Blog</a></li>
          <li><a href="#" class="hover:text-black transition">Help Center</a></li>
        </ul>
      </div>

      
      <div>
        <h2 class="text-xl font-extrabold mb-4">Resources</h2>
        <ul class="space-y-2 font-bold text-gray-600">
          <li><a href="#" class="hover:text-black transition">Pricing</a></li>
          <li><a href="#" class="hover:text-black transition">FAQs</a></li>
          <li><a href="#" class="hover:text-black transition">Contact Support</a></li>
          <li><a href="#" class="hover:text-black transition">Privacy Policy</a></li>
          <li><a href="#" class="hover:text-black transition">Terms and Agreement</a></li>
        </ul>
      </div>

     
      <div>
        <h2 class="text-xl font-extrabold mb-4">Support</h2>
        <ul class="space-y-2 font-bold text-gray-600">
          <li><a href="#" class="hover:text-black transition">Contact</a></li>
          <li><a href="#" class="hover:text-black transition">Affiliates</a></li>
          <li><a href="#" class="hover:text-black transition">Sitemap</a></li>
          <li><a href="#" class="hover:text-black transition">Cancelation Policy</a></li>
          <li><a href="#" class="hover:text-black transition">Security</a></li>
        </ul>
      </div>
    </div>
  </div>

  
  <div class="border-t border-gray-200 py-6 text-center">
    <p class="text-gray-600">© 2025 FreshMart. All Rights Reserved.</p>
  </div>
</div>

        
        </section>
    </div>
  )
}

export default Footer