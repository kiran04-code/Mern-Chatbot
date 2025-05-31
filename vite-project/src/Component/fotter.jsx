import React from "react";

const Footer = ()=>{
    return(
        <footer class="bg-[rgb(3,1,1)] text-white py-10 px-6 md:px-16 mt-25">
  <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

    <div>
      <h2 class="text-2xl font-bold mb-4 text-[rgb(252,124,104)]">MernBot</h2>
      <p class="text-sm leading-relaxed">
        Elevate your style with our premium products. Crafted for elegance, designed for you.
      </p>
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
      <ul class="space-y-2 text-sm">
        <li><a href="#" class="hover:underline">Home</a></li>
        <li><a href="#" class="hover:underline">Shop</a></li>
        <li><a href="#" class="hover:underline">About</a></li>
        <li><a href="#" class="hover:underline">Contact</a></li>
      </ul>
    </div>
    <div>
      <h3 class="text-lg font-semibold mb-4">Support</h3>
      <ul class="space-y-2 text-sm">
        <li><a href="#" class="hover:underline">FAQs</a></li>
        <li><a href="#" class="hover:underline">Shipping</a></li>
        <li><a href="#" class="hover:underline">Returns</a></li>
        <li><a href="#" class="hover:underline">Privacy Policy</a></li>
      </ul>
    </div>


    <div>
      <h3 class="text-lg font-semibold mb-4">Subscribe</h3>
      <p class="text-sm mb-4">Get the latest updates and offers.</p>
      <form class="flex flex-col space-y-3">
        <input type="email" placeholder="Your email" className="px-4 py-2 rounded-md text-white-50 border-2 border-[rgb(252,124,104)]" />
        <button type="submit" class="bg-[rgb(252,124,104)] text-black font-semibold py-2 rounded-md hover:bg-gray-100 transition-all">
          Subscribe
        </button>
      </form>
    </div>
  </div>


  <div class="border-t border-white mt-10 pt-6 text-center text-sm">
    &copy; 2025 MernBot. All rights reserved.
  </div>
</footer>

    )
}

export default Footer