import Sidebar from "../Component/sidebar";
import { useState, useRef, useEffect } from "react";
import { IoMenu } from "react-icons/io5";
import { Headers } from "../Component/Headers";
import { FaRobot } from "react-icons/fa";
import { chatsData } from "../context/ChatContext";
import { useSelector } from "react-redux";
import { Loadingsmall } from "../Component/Loading";
import { MdSend } from "react-icons/md";

export const StartChat = () => {
    const [Isopen, setIsOpen] = useState(false);
    const { prompt, setPrompt, handleApiChats, NewchatsLoading, messages ,chats} = chatsData();
    console.log(chats.length)
    const data = useSelector(state => state.user);

    const messageContainerRef = useRef();

    const toggleSidebar = () => setIsOpen(!Isopen);

    const submitHandler = (e) => {
        e.preventDefault();
        handleApiChats();
    };

    useEffect(() => {
        if (messageContainerRef.current) {
            messageContainerRef.current.scrollTo({
                top: messageContainerRef.current.scrollHeight,
                behavior: "smooth",
            });
        }
    }, [messages]);

    return (
        <div className="w-full h-screen bg-zinc-950 relative flex flex-col md:flex-row overflow-hidden">
            <Sidebar Isopen={Isopen} ToggleSideBar={toggleSidebar} />

            <button
                onClick={toggleSidebar}
                className="md:hidden p-3 text-white text-3xl fixed top-4 left-4 z-50"
            >
                <IoMenu />
            </button>

            {/* Main Content */}
            <div className="flex-1 text-white p-4 sm:p-6 pt-20 md:pt-6">
                <Headers />

                <div
                    className="flex-1 mt-6 sm:mt-10 p-4 sm:p-6 max-h-[400px] overflow-y-auto mb-28 md:mb-0 thin-scrollbar bg-zinc-800 rounded-2xl"
                    ref={messageContainerRef}
                >
                    {messages?.length > 0 ? (
                        messages.map((e, i) => (
                            <div key={i}>
                                <div className="mb-4 rounded text-white ">
                                    <div className="flex items-center gap-2 ml-[50%] ">
                                        <div className="h-[30px] w-[30px] rounded-full bg-zinc-50 overflow-hidden">
                                            <img
                                                className="w-full h-full object-cover "
                                                src={data.currentUser?.data?.profileImage}
                                                alt="User"
                                            />
                                        </div>
                                        <span className="text-sm ">You</span>
                                    </div>
                                    <p className="mt-3 p-2 bg-zinc-600 rounded-2xl ml-[50%]">{e.question}</p>
                                </div>

                                <div className="mb-4 rounded text-white">
                                    <div className="flex items-center gap-2">
                                        <div className="p-2 text-[rgb(252,124,104)] rounded-full bg-zinc-50 text-xl h-[30px] w-[30px] flex justify-center items-center">
                                            <FaRobot />
                                        </div>
                                        <span className="text-sm">Bot</span>
                                    </div>
                                    <p className="mt-3 p-2 bg-zinc-600 rounded-2xl">{e.answer}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No Chat Yet</p>
                    )}

                    {NewchatsLoading && <Loadingsmall />}
                </div>
            </div>
{
  chats.length >0 ?  (
    // Input Field
    <div className="absolute bottom-5 left-0 right-5 md:left-auto md:right-7 md:w-[75%] p-3 sm:p-4 bg-zinc-800 rounded-t-xl md:rounded-2xl z-40">
      <form onSubmit={submitHandler} className="flex items-center w-full space-x-3">
        <input
          type="text"
          className="text-white bg-zinc-700 rounded-xl p-3 sm:p-4 w-full placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-[rgb(252,124,104)]"
          placeholder="Ask anything..."
          onChange={(e) => setPrompt(e.target.value)}
          value={prompt}
          required
        />
        <button
          type="submit"
          className="text-[rgb(252,124,104)] text-xl sm:text-2xl p-3 bg-zinc-600 rounded-full hover:bg-zinc-500 transition-all"
        >
          <MdSend />
        </button>
      </form>
    </div>
  ) : (
    // No Chats Message
    <div className="absolute bottom-5 left-0 right-5 md:left-auto md:right-7 md:w-[75%] p-4 bg-zinc-800 rounded-xl text-center text-white z-40">
      <p className="text-zinc-300 text-sm sm:text-base">Create your first chat to get started ✨</p>
    </div>
  )
}
        </div>
    );
};
