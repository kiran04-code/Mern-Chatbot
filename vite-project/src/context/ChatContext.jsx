import { createContext, useContext, useState } from "react";
import axios from 'axios';
import { useEffect } from "react";

const ChatContext = createContext([]);

export const  ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]); // Or fetch from API, etc.
  const [prompt,setPrompt]= useState()
  const [chats,setchats]= useState([])
  const [NewchatsLoading,setNewchatsLoading] = useState(false)
  const [crechatLod,setcreatchatLod]  = useState(false)
   const [selected,setSelected] = useState(null)
  const handleApiChats = async () => {
  if (prompt.trim() === "") return alert("Please write a prompt.");
  setNewchatsLoading(true);

  try {
    const response = await axios.post(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyBy79_fffxHeoF3b7dsLcoXuTxdLj04IkQ",
      {
        contents: [{ parts: [{ text: prompt }] }],
      }
    );

    const question = prompt;
    const answer = response?.data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response";
    setPrompt(""); // clear input

    const res = await fetch(`${import.meta.env.VITE_API_URL}/addconv/${selected}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ question, answer }),
    });

    const data = await res.json();
    if (Array.isArray(messages)) {
      setMessages((prev) => [...prev, data.Conversation]);
    } else {
      console.warn("Messages state is not an array. Resetting.");
      setMessages([data.Conversation]); // Fallback
    }

  } catch (error) {
    alert("Something went wrong. Please try again.");
    console.error(error);
  } finally {
    setNewchatsLoading(false);
  }
};

const fetchats = async () => {
  try {
    const res = await fetch("api/GetAllchats", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    const data = await res.json();
    setchats(data);
    setSelected(data[0]._id)
  } catch (error) {
    console.log("Error fetching chats:", error);
  }
};

 const cretaechatnew = async () =>{
  setcreatchatLod(true)
  const res = await fetch("api/new",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    }
  }) 
  await res.json()
  setcreatchatLod(false)
   fetchats()
 }

 const fetcmessage = async() =>{
   try {
    
     const res = await fetch(`api/getAllconver/${selected}`,{
      method:"GET",
      header:{
        "Content-Type":"application/json"
      }
     })
     const data = await res.json()
     setMessages(data)
   } catch (error) {
    console.log(error)

   }
 }
 useEffect(()=>{
  fetcmessage()
 },[selected])

 const deleleteConv= async() =>{
  const res = await fetch(`api/deleteconv/${selected}`,{
    method:"post",
    headers:{
      "Content-Type":"application/josn"

    }
  })
  const data = await res.json()
  fetchats()
  console.log(data)
 }
  return (
    <ChatContext.Provider value={{ prompt,setPrompt,handleApiChats ,NewchatsLoading,messages,chats,fetchats,cretaechatnew,crechatLod,selected,setSelected,deleleteConv}}>
      {children} 
    </ChatContext.Provider>
  );
};
export const chatsData = () => useContext(ChatContext);
