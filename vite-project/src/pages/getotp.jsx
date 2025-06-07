import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { signInSuccess,signInFail  } from '../redux/userslice/slice';
import { useDispatch,useSelector } from 'react-redux';
const Getotp = () => {
  const data = useSelector(state=>state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [from,setFrom] = useState({})
const handleChnage = (e)=>{
  setFrom({...from,[e.target.name]:e.target.value})
}
console.log(from)
const handlesubmit = async (e) =>{
e.preventDefault();
try {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/signin`, {
    method:"POST",
    headers:{
      "Content-type":"application/json"
    },
    body:JSON.stringify(from)
  })
  const data = await res.json()
  console.log(data)
  if(data.success){
  navigate("/")
  dispatch(signInSuccess(data))
  }
  else{
   dispatch(signInFail(data.message))
  }
} catch (error) {
  
}
}
  return (
    <div className="w-full min-h-screen bg-zinc-950 flex justify-center items-center px-4">
      <form className="flex flex-col justify-center items-center w-full max-w-md bg-zinc-900 p-6 shadow-md" onSubmit={handlesubmit}>
        <input
          type="tel"
          placeholder="Enter Your Otp"
          onChange={handleChnage}
          name="otp"
          className="w-full h-12 p-3 mb-4 bg-zinc-800 text-white  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#fc7c68]"
        />
        <input
          type="email"
          placeholder="Enter Your Email"
          onChange={handleChnage}
          name="email"
          className="w-full h-12 p-3 mb-4 bg-zinc-800 text-white  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#fc7c68]"
        />
        <button
        type='submit'
          className="w-full h-12 text-white font-semibold  hover:brightness-110 transition-all duration-300"
          style={{ background: 'rgb(252, 124, 104)' }}
        >
          Verify Otp
        </button>
       {
        data.erroemessage && <a className='text-red-500 mt-4'>{data.erroemessage}</a>
       }
      </form>
     
    </div>
  );
};

export default Getotp;
