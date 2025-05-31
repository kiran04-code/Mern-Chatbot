import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" p-4">
       
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo + Subtext */}
        <div>
          <a href="/" className="text-white text-lg font-bold">MernBot</a>
          <p className="text-zinc-50 text-sm">Powered by  <span className='font-bold' style={{color:"rgb(352, 124, 104)"}}>KiraN.DEV</span></p>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-4">
          <a href="/signup" className="text-white">Sign Up</a>
         <a href="/signin"> <button className='font-bold text-zinc-50 p-1 rounded-2xl '  style={{ backgroundColor: 'rgb(352, 124, 104)' }}> GetStart</button></a>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-2 px-4">
          <a href="/signin" className="block text-white py-1">Sign In</a>
          <button className='font-bold text-zinc-50 p-1 rounded-2xl '  style={{ backgroundColor: 'rgb(352, 124, 104)' }}> GetStart</button> 
        </div>
      )}
    </nav>
  );
};

export default Navbar;
