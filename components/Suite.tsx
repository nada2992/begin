import React from 'react';

const Suite = () => {
  return (
    <section className="bg-[#08080C] flex flex-col sm:flex-row items-center sm:items-start">
      <div className="relative flex flex-col items-center sm:items-start w-full sm:w-1/2 border-b-[#545454] border-b-4 sm:border-none">
        <img src="Mask.svg" alt="suite" className="w-full sm:w-auto" />
      </div>
      <div className="relative flex flex-col items-center justify-center w-full sm:w-1/2 p-4 bg-opacity-50 sm:bg-transparent sm:p-8">
        <p className="text-white text-center sm:text-left">
          In collaboration with ZOZOSUIT, our mirror will also provide a highly accurate 
          replica of the user’s body via scanning and image processing. 
          Through this, we will also be able to provide motion tracking for the 
          user-customized metahuman in real time, making the experience incredibly 
          realistic provided the mirror will be touch screen and interactive.
        </p>
      </div>
    </section>
  );
}

export default Suite;
