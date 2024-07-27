import React from 'react';

const Using = () => {
  return (
    <section className="flex relative">
      <img 
        src="/back.svg" 
        alt="background" 
        className="w-full h-full object-cover absolute top-0 left-0 z-0" 
      />
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="relative z-10 px-5 mb-10 flex flex-col items-center text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-left font-extrabold text-white sm:w-[32rem] md:w-[42rem] mt-[3rem] sm:mt-[4rem] md:mt-[5rem]">
            Using <span className="text-[#91E227]">nvidia</span> cloud to run and 
            produce realistic results.
          </h2>
        </div>
      </div>
    </section>
  )
}

export default Using;
