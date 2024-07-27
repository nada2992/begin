import React from 'react'
import { FaPlay } from 'react-icons/fa'

const Enhance = () => {
  return (
    <section className='pt-12 p-24 flex flex-col justify-center w-full bg-[#2A2320] dark:bg-[#0C0C11]'>
        <div className='flex place-content-center items-center justify-center text-center'>
            <h1 className='text-4xl w-[48rem] text-white'>Enhance your shopping experience 
            with elevated expertise and efficient time constraints. </h1>
        </div>
        <div className="relative flex items-center justify-center pt-8">
            <div className="flex w-24 md:w-[11%] h-1 ">
              <div className="bg-[#1EE1B3] w-7/10"/>
            </div>
        </div>

        <div className='flex relative justify-center pt-12'>
            <button className='flex items-center justify-center w-12 h-12 border border-white'>
                <FaPlay className='text-white'/>
            </button>
        </div>
    </section>
  )
}

export default Enhance
