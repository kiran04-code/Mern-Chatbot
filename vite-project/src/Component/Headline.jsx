import React from 'react';

const Headline = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-16 px-4 text-center">
      <h1 className="text-zinc-50 font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-4xl">
        Help,<span style={{ color: 'rgb(352, 124, 104) ' }}>convert</span>  and  <span style={{ color: 'rgb(352, 124, 104) ' }}>sell,</span> with a  data-driven AI chatbot
      </h1>
      <a href="/signin">
      <button className=" text-white  font-semibold py-2 px-4 rounded-2xl mt-6 hover:bg-gray-200 transition-all duration-300 filter brightness-90 saturate-150" style={{ backgroundColor: 'rgb(352, 124, 104)' }}>
        Get Start
      </button></a>
    </div>
  );
};

export default Headline;
