import React from 'react';

const Tagline = () => {
  return (
    <section className='relative flex items-center justify-center min-h-screen text-black bg-white dark:bg-[#08080C] dark:text-white'>
      <img src='/bg.svg' alt='background' className="w-full h-full z-0 object-cover absolute"/>

      <div className="relative flex items-center justify-end w-full h-full z-10 p-4">
        <div className="flex flex-col items-end text-right">
          <div className="relative">
            <span className="font-bold text-[#1EE1B3] absolute top-0 right-[4px] text-sm sm:text-base sm:right-[16px] md:text-lg lg:text-xl">
              TAGLINE
            </span>
            <h1 className='tracking-widest text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-4'>
              BEGIN
            </h1>
            <div className="relative flex items-center justify-end">
              <div className="flex w-full h-1 justify-end relative pr-[16px]">
                <div className="bg-[#1EE1B3] w-[12%] "/>
              </div>
            </div>
          </div>
          <p className='text-white mt-4 max-w-lg text-xs sm:text-sm md:text-base lg:text-lg'>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nibh euismod tincidunt ut laoreet dolore magna aliquam erat. Consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt.
          </p>
          <div className='mt-8 hidden sm:flex flex-col sm:flex-row'>
            <input type="email" placeholder="Enter your email" className='p-2 bg-transparent border border-white rounded-sm mb-4 sm:mb-0'/>
            <button className='p-2 bg-black hover:bg-[#1EE1B3] hover:text-black text-white rounded-sm transition duration-700'>GET STARTED</button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 sm:left-10 sm:translate-x-0 flex space-x-4">
        <img src='/inst.svg' alt='instagram' className='w-8 h-8 sm:w-6 sm:h-6'/>
        <img src='/twit.svg' alt='twitter' className='w-8 h-8 sm:w-6 sm:h-6'/>
        <img src='/fac.svg' alt='facebook' className='w-8 h-8 sm:w-6 sm:h-6'/>
      </div>
    </section>
  );
}

export default Tagline;
