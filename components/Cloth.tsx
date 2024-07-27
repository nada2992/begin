import React from 'react';

const Cloth = () => {
  return (
    <section className="relative flex flex-col-reverse items-center justify-between w-full p-4 text-black bg-white dark:bg-[#08080C] dark:text-white md:p-6">
      <div className="flex flex-col md:flex-row md:justify-center md:items-center w-full">
        <div className="p-4 w-full sm:w-[22rem] md:w-[25rem] xl:w-[58rem] bg-[#1A1A1F] rounded-md">
          <div className="md:w-[36rem]">
            <h1 className="text-[#1EE1B3] text-3xl md:text-4xl font-bold">
              3D clothing simulation on user-designed metahuman
            </h1>
            <div className="relative flex mt-3">
              <div className="flex w-24 md:w-[22%] h-1">
                <div className="bg-[#1EE1B3] w-7/10" />
                <div className="bg-[#515151] w-3/10" />
              </div>
            </div>
            <p className="mt-4 text-sm md:text-base text-white">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie
            </p>
          </div>
          <button className="mt-6 px-4 py-2 text-black bg-white font-bold rounded-md hover:bg-black hover:text-white transition duration-700 text-sm md:text-base">
            DISCOVER MORE
          </button>
        </div>
        <div className="mt-6 md:mt-0 md:ml-6 absolute right-0">
          <img src="/Carousel.svg" alt="jacket" className="w-full h-auto md:w-[817px] md:h-[429px]" />
        </div>
      </div>
    </section>
  );
};

export default Cloth;
