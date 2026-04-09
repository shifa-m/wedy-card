import React from 'react'
import { ChevronLeft  } from 'lucide-react';


const header = () => {
  return (
    <div >
      
      
      <div className='flex justify-between m-10'>
        <button className='h-15 bg-[#b28dee] transition duration-300 hover:text-xl text-white font-bold w-45 rounded-2xl '>+ Add New Item</button>
        <button className='h-15 bg-[#b28dee] transition duration-300 hover:text-xl text-white font-bold w-45 rounded-2xl'> & Remove All</button>
      </div>
    </div>
  )
}

export default header
