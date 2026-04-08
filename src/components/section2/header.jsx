import React from 'react'
import { ChevronLeft ,EllipsisVertical } from 'lucide-react';


const header = () => {
  return (
    <div>
       <div className='h-10 w-full  flex justify-between  bg-gray-300'>
        <h1 className='font-bold text-2xl flex '> <ChevronLeft  size={35} />Your Cart</h1>
         <EllipsisVertical />
      </div>
      <div className='flex m-10'>
        <button className='h-8 border font-bold  w-20 rounded-xl mr-10 transition duration-300 hover:bg-red-500 hover:text-white cursor-pointer'>All</button>
        <button className='h-8 border font-bold  w-30 rounded-xl mr-10 transition duration-300 hover:bg-red-500 hover:text-white cursor-pointer'>Traditional</button>
        <button className='h-8 border font-bold  w-30 rounded-xl mr-10 transition duration-300 hover:bg-red-500 hover:text-white cursor-pointer'>Modern</button>
        <button className='h-8 border font-bold  w-25 rounded-xl mr-10 transition duration-300 hover:bg-red-500 hover:text-white cursor-pointer'>Luxury</button>
      </div>
      <div className='flex justify-between m-10'>
        <button className='h-15 bg-gray-300 text-red-500 font-bold w-40 rounded-2xl '>+ Add New Item</button>
        <button className='h-15 bg-red-500 text-white font-bold w-40 rounded-2xl'> & Remove All</button>
      </div>
    </div>
  )
}

export default header
