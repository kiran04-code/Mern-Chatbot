import { createContext, useContext, useState } from "react";
import axios from 'axios';

const ChatContext = createContext([]);

export const  ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]); // Or fetch from API, etc.
  const [prompt,setPrompt]= useState()
  const [NewchatsLoading,setNewchatsLoadin] = useState(false)
  const handleApiChats = async () => {
  if (prompt.trim() === "") return alert("Please write a prompt.");

  setNewchatsLoadin(true);

  try {
    const response = await axios({
      url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyBy79_fffxHeoF3b7dsLcoXuTxdLj04IkQ",
      method: "POST",
      data: {
        contents: [{ parts: [{ text: prompt }] }],
      },
    });

    const messages = {
      question: prompt,
      answer: response.data.candidates[0].content.parts[0].text,
    };

    setMessages((prev) => [...prev, messages]);
    setPrompt("");  // clear prompt after sending
  } catch (error) {
    alert("Something went wrong. Please try again.");
    console.error(error);
  } finally {
    setNewchatsLoadin(false);
  }
};

  return (
    <ChatContext.Provider value={{ prompt,setPrompt,handleApiChats ,NewchatsLoading,messages}}>
      {children} 
    </ChatContext.Provider>
  );
};

export const chatsData = () => useContext(ChatContext);
