
import React from 'react'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from './pages/Signup'
import Signin from "./pages/signin.jsx";
import Getotp from './pages/getotp'
import { StartChat } from './pages/StarChat'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/signin" element={<Signin/>} />
      <Route path="/getotp" element={<Getotp/>} />
      <Route path="/startChat" element={<StartChat/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
