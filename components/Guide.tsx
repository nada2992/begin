import React from 'react'
import { GUIDE } from '../constants'

const Guide = () => {
  return (
    <section className='pt-12 p-6 md:p-24 flex flex-col justify-center w-full bg-[#3A322F] dark:bg-[#08080C]'>
        <div className='flex place-content-center items-center w-full justify-center text-center'>
            <h1 className='text-white text-2xl md:text-4xl'>
                How it is useful for users and companies
            </h1>
        </div>
        
        <div className="relative flex items-center justify-center pt-8">
            <div className="flex w-24 md:w-[11%] h-1">
                <div className="bg-[#1EE1B3] w-3/10"/>
            </div>
        </div>

        <div className='pt-8 mt-8 text-white grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4'>
            {GUIDE.map((item) => (
                <div className='p-4 w-full sm:w-[14rem] md:w-[12rem] xl:w-[18rem] bg-[#1A1A1F] rounded-md'>
                    <h2 className='flex items-center gap-2 text-lg md:text-lg font-semibold'>
                        {item.title}
                        <img src={item.icon} alt='icon' className='w-6 h-6'/>
                    </h2>
                    <p className='mt-2 text-xs md:text-sm'>{item.description}</p>
                </div>
            ))}
        </div>
        <div className='flex items-center justify-center pt-12'>
            <button className="mt-6 px-4 py-2 text-white bg-[#1A1A1F] dark:bg-white dark:text-black font-bold rounded-sm hover:bg-[#1EE1B3] transition duration-700 text-sm md:text-base">
                LEARN MORE
            </button>
        </div>
    </section>
  )
}

export default Guide
