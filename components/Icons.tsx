import React from 'react'
import { LOGO } from '../constants'

const Icons = () => {
  return (
    <section className="my-4 text-black bg-white dark:bg-[#08080C] dark:text-white">
      <div className="flex justify-center items-center flex-wrap w-full">
        {LOGO.map((logo) => (
          <div key={logo.id} className="flex-1 sm:min-w-[120px] md:min-w-[150px] p-2">
            <img 
              src={logo.logo} 
              alt="logo" 
              className="w-[80px] sm:w-[120px] md:w-[180px] object-contain" 
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Icons
