import Sidebar from "../Component/sidebar";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { Headers } from "../Component/Headers";
import { RiRobot3Fill } from "react-icons/ri";
import { chatsData } from "../context/ChatContext"
import { useSelector } from "react-redux";
import { Loadingsmall } from "../Component/Loading";
import { MdSend } from "react-icons/md";

export const StartChat = () => {
    const [Isopen, setIsOpne] = useState(false);
    const { prompt, setPrompt, handleApiChats, NewchatsLoading, messages } = chatsData()
    console.log(prompt)
    const data = useSelector(state => state.user)
    const ToggleSideBar = () => {
        setIsOpne(!Isopen);
    };
    const submithandler = (e) => {
        e.preventDefault()
        handleApiChats()
    }
    return (
        <div className="w-full h-screen bg-zinc-950 relative flex">

            <Sidebar Isopen={Isopen} ToggleSideBar={ToggleSideBar} />

            <button
                onClick={ToggleSideBar}
                className="md:hidden p-3 text-white text-3xl fixed top-4 left-4 "
            >
                <IoMenu />
            </button>

            {/* Main Content */}
            <div className="flex-1 text-white p-6 mt-16 md:mt-0">
                <Headers />
                <div className="flex-1 mt-10  p-6 max-h-[600px] overflow-y-auto  mb-25 md:mb-0 thin-scrollbar bg-zinc-800 rounded-2xl">
                    {
                        messages && messages.length > 0 ? messages.map((e, i) => (
                            <div key={i}>
                                <div className="mb-4 rounded bg-blue-700 text-white">
                                    <div className="h-[30px] w-[30px] rounded-full bg-zinc-50 overflow-hidden">
                                        <img className="w-full h-full object-cover" src={data.currentUser.data.profileImage} alt="" />
                                    </div>
                                    {e.question}
                                </div>
                                <div className="mb-4 rounded bg-blue-700 text-white">
                                    <div className="p-2 text-[rgb(352,124,104)] rounded-full bg-zinc-50 text-2xl " >
                                        <RiRobot3Fill />
                                    </div>
                                    <p className="text-white">{e.answer}</p>
                                </div>
                            </div>
                        )) : (<p>No Chat Yet</p>)}
                    {
                        NewchatsLoading && <Loadingsmall />
                    }
                </div>
            </div>
            <div className="fixed bottom-0 right-17 left-auto  rounded-4xl w-[70%] p-4 bg-zinc-800 mb-2 flex">
                <form onSubmit={submithandler} className="flex items-center w-full space-x-4">
                    <input
                        type="text"
                        className="text-white bg-zinc-700 rounded-xl p-4 w-full placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-[rgb(252,124,104)]"
                        placeholder="Ask anything..."
                        onChange={(e) => setPrompt(e.target.value)}
                        value={prompt}
                        required
                    />
                    <button
                        type="submit"
                        className="text-[rgb(252,124,104)] text-2xl p-3 bg-zinc-600 rounded-full hover:bg-zinc-500 transition-all"
                    >
                        <MdSend />
                    </button>
                </form>
            </div>
        </div>
    );
};
