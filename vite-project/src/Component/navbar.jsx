import React, { useState } from 'react';
import {useNavigate} from "react-router-dom"
import {signInSuccess} from  "../redux/userslice/slice.js"
import  {useSelector,useDispatch} from "react-redux"
const Navbar = () => {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false);
 const dipatch = useDispatch(state=>state.user)
  const [isOpenok, setIsOpenok] = useState(false);
  const data = useSelector(state=>state.user)

  const handlelogout = async ()=>{
    const res = await fetch("api/Logout")
    const data = await res.json()
    if(data.sucess){
     navigate("/")
     dipatch(signInSuccess())
    }
  }
  return (
    <nav className=" p-4 relative">
       
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo + Subtext */}
        <div>
          <a href="/" className="text-white text-lg font-bold">MernBot</a>
          <p className="text-zinc-50 text-sm">Powered by  <span className='font-bold' style={{color:"rgb(352, 124, 104)"}}>KiraN.DEV</span></p>
        </div>
  {/* Dropdown menu */}
      {isOpenok && (
        <div className="absolute right-8 mt-85 w-64 rounded-xl shadow-lg bg-gray-800 text-white z-50">
          <div className="px-4 py-2 border-b-2 border-[rgb(352,124,104)]">
            <p className="text-sm">{data.currentUser.data.email}</p>
          </div>
          <ul className="py-1">
            <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Upgrade Plan</li>
            <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Customize ChatGPT</li>
            <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Settings</li>
            <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Release Notes</li>
            <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Terms & Policies</li>
            <li className="px-4 py-2 hover:bg-[rgb(372,124,102)] text-white cursor-pointer rounded-b-xl " >
              <button onClick={handlelogout}>Log out</button>
              
            </li>
          </ul>
        </div>
      )}
        {/* Desktop Links */}
        <div className="hidden md:flex space-x-4">
          <a href="/signup" className="text-white">Sign Up</a>
        {
          data.currentUser?(
           <div className="h-[30px] w-[30px] rounded-full bg-zinc-50 overflow-hidden" onClick={()=>(setIsOpenok(!isOpenok))}>
          <img  className="w-full h-full object-cover" src={data.currentUser.data.profileImage} alt="" />
          </div>
           ):(
             <a href="/signin"> <button className='font-bold text-zinc-50 p-1 rounded-2xl '  style={{ backgroundColor: 'rgb(352, 124, 104)' }}> GetStart</button></a>
           )
        }
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
