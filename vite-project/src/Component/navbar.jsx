import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { signInSuccess } from "../redux/userslice/slice.js";
import { useSelector, useDispatch } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpenok, setIsOpenok] = useState(false);
  const dispatch = useDispatch();
  const data = useSelector(state => state.user);

  const handlelogout = async () => {
    const res = await fetch("api/Logout");
    const data = await res.json();
    if (data.sucess) {
      navigate("/");
      window.location.reload();
      dispatch(signInSuccess());
    }
  };

  return (
    <nav className="p-4 relative">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo + Subtext */}
        <div>
          <a href="/" className="text-white text-lg font-bold">MernBot</a>
          <p className="text-zinc-50 text-sm">
            Powered by <span className='font-bold' style={{ color: "rgb(352, 124, 104)" }}>KiraN.DEV</span>
          </p>
        </div>

        {/* Profile Dropdown */}
        {isOpenok && (
          <div className="absolute right-8 mt-85 w-64 rounded-xl shadow-lg bg-gray-800 text-white z-50">
            <div className="px-4 py-2 border-b-2 border-[rgb(352,124,104)]">
              <p className="text-sm">{data.currentUser?.data?.email}</p>
            </div>
            <ul className="py-1">
              <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Upgrade Plan</li>
              <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Customize ChatGPT</li>
              <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Settings</li>
              <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Release Notes</li>
              <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Terms & Policies</li>
              <li className="px-4 py-2 hover:bg-[rgb(372,124,102)] text-white cursor-pointer rounded-b-xl">
                <button onClick={handlelogout}>Log out</button>
              </li>
            </ul>
          </div>
        )}

        {/* Always Visible Auth Section */}
     <div className="flex space-x-2 items-center">
  {/* Sign Up - Hidden on small screens, shown on md and above */}
  <a href="/signup" className="hidden md:block text-white text-sm md:text-base">
    Sign Up
  </a>

  {/* Avatar or GetStart Button */}
  {data.currentUser ? (
    <div
      className="h-8 w-8 md:h-[30px] md:w-[30px] rounded-full bg-zinc-50 overflow-hidden cursor-pointer"
      onClick={() => setIsOpenok(!isOpenok)}
    >
      <img
        className="w-full h-full object-cover"
        src={data.currentUser.data.profileImage}
        alt="profile"
      />
    </div>
  ) : (
    <a href="/signin">
      <button
        className="font-bold text-zinc-50 text-sm md:text-base px-3 py-1 md:px-4 md:py-1.5 rounded-2xl"
        style={{ backgroundColor: 'rgb(352, 124, 104)' }}
      >
        GetStart
      </button>
    </a>
  )}
</div>

      </div>
    </nav>
  );
};

export default Navbar;
