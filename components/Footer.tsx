import React from 'react'
import { IoMdArrowDropup } from 'react-icons/io'
import { FOOTER } from '../constants'

const Footer = () => {
  return (
    <footer className='bg-[#08080C] flex flex-col items-center pt-4'>
      <div className='flex flex-col items-center'>
        <div className='flex items-center justify-center'>
          <IoMdArrowDropup className='text-[#1EE1B3] text-6xl' />
        </div>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='tracking-normal text-white text-5xl'>BEGIN</h1>
          <div className='flex space-x-4 gap-1 mt-6'>
            {FOOTER.map((item, index) => (
              <div key={index} className='flex items-center bg-[#383838] rounded-full w-[3rem] justify-center h-12'>
                <img src={item.icon} alt={`icon-${index}`} className='h-6' />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center sm:flex-row sm:justify-between max-w-screen-xl mx-auto text-white mt-4 px-4">
        <div className="flex items-center space-x-2 justify-center sm:justify-start">
          <span>©</span>
          <p>All Rights Reserved</p>
        </div>
        <div className="hidden sm:flex space-x-4 justify-center sm:justify-end mt-4 sm:mt-0">
          <a href="#">Terms and Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
