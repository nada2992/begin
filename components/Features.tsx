"use client";
import { useState } from 'react';
import { FEATURES } from '../constants';
import { FaChevronDown } from 'react-icons/fa';

const Features = () => {
  const [open, setOpen] = useState(null);

  const handleClick = (index: any) => {
    setOpen(open === index ? null : index);
  };

  return (
    <section className='pt-12 md:p-24 flex flex-col justify-center w-full'>
      <div className='flex place-content-center items-center w-full justify-center text-center'>
        <h1 className='text-black dark:text-white text-2xl md:text-4xl'>
          Standard Features
        </h1>
      </div>
      <div className="relative flex items-center justify-center pt-8">
        <div className="flex w-24 md:w-[11%] h-1">
          <div className="bg-[#1EE1B3] w-3/10" />
        </div>
      </div>

      <div className='p-4 gap-4 mt-2'>
        {FEATURES.map((item, index) => (
          <div key={item.title} className='grid grid-cols-1 border-b border-t items-center justify-between'>
            <div className='flex items-center justify-between w-full'>
              <div className='justify-center'>
                <h1 className='mt-4 items-center text-[#565660] text-xl h-10 font-bold'>
                  {item.title}
                </h1>
              </div>
              <div className=''>
                <button onClick={() => handleClick(index)}>
                  <FaChevronDown className='text-[#1EE1BE]' />
                </button>
              </div>
            </div>
            {open === index && (
              <div className='flex flex-col sm:flex-col md:flex-row mt-4 pb-4 items-center justify-between'>
                <div className='flex flex-col sm:flex-col md:flex-row justify-center items-center mb-4 md:mb-0'>
                  <img src='/Lorem.svg' alt='icon' className='mr-2 mb-2 md:mb-0' />
                  <h1 className='items-center justify-center text-3xl'>Lorem</h1>
                </div>
                <div className='flex flex-col pb-4'>
                  <a className='border-b gap-4'>{item.description}</a>
                  <a className=''>{item.description}</a>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
