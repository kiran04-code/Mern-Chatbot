import React from "react";
import { FaGoogle } from "react-icons/fa";
import {GoogleAuthProvider,getAuth,signInWithPopup} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { signInSuccess} from '../redux/userslice/slice';
import { useDispatch } from 'react-redux';
import { app } from "../firebase.js"; // Ensure this path is correct based on your project structure
const Google = () => {
   const naviagete = useNavigate()
   const dispatch = useDispatch()
  const handleGoogleLogin = async(e) => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    const result = await signInWithPopup(auth,provider);
    console.log(result);
   e.preventDefault();
    try{
      const res = await fetch("api/google",{
      method:"POST",
      headers:{
        "Content-type":"application/json"
      },
      body:JSON.stringify({
        email:result.user.email,
      })
    })

    const data = await res.json();
    console.log(data);
    if(data.success){
      naviagete("/")
      dispatch(signInSuccess(data))
    }
    }
    catch(error){
      console.error("Error during Google login:", error);
    }
  }
  return (
    <div className="flex justify-center items-center px-4">
      <button onClick={handleGoogleLogin} type="submit" className="mt-2 w-full sm:w-[300px] md:w-[350px] lg:w-[400px] flex flex-row items-center justify-center gap-2 bg-amber-100 py-2  shadow-md hover:bg-amber-200 transition">
        <FaGoogle style={{ color: "rgb(232, 74, 50)" }} />
        <span className="text-sm sm:text-base">Login with Google</span>
      </button>
    </div>
  );
};

export default Google;
