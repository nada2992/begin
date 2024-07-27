import React from 'react';
import { NEEDS } from '../constants';

const Needs = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between w-full p-4 md:p-6 pt-24">
      <div className="relative flex items-center justify-center mb-8 md:mb-0">
        <div className='absolute border border-[#1EE1B3] w-[10rem] sm:w-[19rem] md:w-[12rem] h-[10rem] sm:h-[19rem] md:h-[10rem] transform rotate-45'/>
        <img src="/TransparentMirror.svg" alt="intro" className='relative w-[15rem] sm:w-[19rem] md:w-[16] h-[15rem] sm:h-[19rem] md:h-[20rem]' />
      </div>
      <div className="flex flex-col justify-center w-full md:w-1/2">
        <div className='w-full'>
          <h1 className="text-[#1EE1B3] text-2xl md:text-4xl font-bold mb-4 md:mb-6">EVERYTHING YOU NEED!</h1>
          <div className="relative flex mb-4 md:mb-6">
            <div className="flex w-24 md:w-[40%] h-1">
              <div className="bg-[#1EE1B3] w-7/10"/>
              <div className="bg-[#515151] w-3/10"/>
            </div>
          </div>
        </div>
        <div className='w-full'>
          {NEEDS.map((item) => (
            <div key={item.title} className='flex flex-col md:flex-row items-center mb-8 md:mb-12'>
              <div className='relative w-[80px] h-[80px] md:w-[100px] md:h-[100px] mr-4 md:mr-8'>
                <img src={item.icon} alt='ellipse' className='absolute top-0 left-0 w-full h-full pt-4' />
                <img src={item.image} alt='image' className='absolute inset-0 w-3/5 h-3/5 m-auto' />
              </div>
              <div className='flex flex-col gap-2 md:gap-4 w-full md:w-[28rem]'>
                <h1 className='font-bold text-xl md:text-3xl'>{item.title}</h1>
                <p className='text-sm md:text-base'>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Needs;
