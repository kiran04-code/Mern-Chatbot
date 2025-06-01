import { IoClose } from "react-icons/io5";

const Sidebar = ({ Isopen, ToggleSideBar }) => {
  return (
    <div
      className={`fixed inset-y-0 left-0 h-screen bg-zinc-800 text-white p-4 z-50 transform transition-transform duration-300 
      w-4/5 md:w-1/5 
      ${Isopen ? "translate-x-0" : "-translate-x-full"} 
      md:translate-x-0 md:static md:block`}
    >
      {/* Close Button - ONLY on Mobile */}
      <button
        onClick={ToggleSideBar}
        className="md:hidden p-2 mb-4 bg-zinc-700 rounded text-3xl"
      >
        <IoClose />
      </button>

      <div
        className="text-xl font-bold mb-6 px-2"
        style={{ color: "rgb(252, 124, 104)" }}
      >
        Mernbot
      </div>

      <div className="mb-4">
        <button className="p-2 bg-zinc-600 rounded-xl w-full hover:bg-zinc-500 transition-all">
          New Chat +
        </button>
      </div>

      <div>
        <p className="text-sm ml-3 font-semibold text-zinc-400">Recent Chats</p>
        <div className="max-h-[500px] overflow-y-auto mb-20 md:mb-0 thin-scrollbar">
          <button className="w-full text-left p-2 bg-zinc-700 hover:bg-zinc-500 transition-all mt-3 flex justify-center items-center rounded-xl">
            Hi My Name is Kiran
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 mb-6 w-full">
        <button
          className="px-4 py-1 font-semibold rounded-xl flex justify-center items-center"
          style={{ background: "rgb(252, 124, 104)" }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
