import React from 'react';

const Learn = () => {
  return (
    <section className="relative flex items-center justify-center w-full p-4 md:p-8">
      <div className="relative w-full">
        <img src="/learn.svg" alt="learn" className="w-full h-auto" />
        <div className="absolute top-0 right-0 flex flex-col items-end justify-center h-full p-4 bg-opacity-50 md:p-8">
          <div className="bg-white bg-opacity-75 p-4 rounded-md w-full sm:w-[50%] md:w-[31rem]">
            <p className="text-justify text-[8px]">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulpuLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo con
            </p>
            <button className="mt-6 px-4 py-2 text-white bg-black dark:bg-white dark:text-black font-bold rounded-md hover:bg-[#1EE1B3] transition duration-700 text-sm md:text-base">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Learn;
