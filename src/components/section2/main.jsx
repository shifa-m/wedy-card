import React from 'react'
import Rightbottom from './rightbottom'
import Leftside from './leftside'

const main = () => {
  return (
    <div className='h-screen w-full  '>
      <div className='h-10 m-10  flex justify-between ml-7'>
        <h1 className='font-bold text-2xl  '>&lt;  Your Cart</h1>
        <h1 className='font-bold text-2xl '>++</h1>
      </div>
      <div className='flex m-10'>
        <button className='h-8 border  w-20 rounded-xl mr-10 transition duration-300 hover:bg-red-500 hover:text-white cursor-pointer'>All</button>
        <button className='h-8 border  w-30 rounded-xl mr-10 transition duration-300 hover:bg-red-500 hover:text-white cursor-pointer'>Traditional</button>
        <button className='h-8 border  w-30 rounded-xl mr-10 transition duration-300 hover:bg-red-500 hover:text-white cursor-pointer'>Modern</button>
        <button className='h-8 border  w-25 rounded-xl mr-10 transition duration-300 hover:bg-red-500 hover:text-white cursor-pointer'>Luxury</button>
      </div>
      <div className='flex justify-between m-10'>
        <button className='h-15 bg-gray-300 text-red-500 font-bold w-40 rounded-2xl '>+ Add New Item</button>
        <button className='h-15 bg-red-500 text-white font-bold w-40 rounded-2xl'> & Remove All</button>
      </div>
      <div className='grid grid-cols-2  h-[78%] bg-gray-100 m-10 rounded-2xl'>
        
        <div className='flex flex-wrap w-full'>
          <Rightbottom />
          <Rightbottom />
          <Rightbottom />
        </div>
        <Leftside />
      </div>
    </div>


  )
}

export default main
