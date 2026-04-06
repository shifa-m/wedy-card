import React from 'react'
import Bottom from './bottom'

const header = () => {
  return (
    <div className=' w-full  '>
      <div className='text-black  font-bold text-2xl p-2 m-0  border-1'>
    <h1>Home</h1> 
      </div>

      <div className='flex justify-around m-10'>
            <button className='border-2 h-9 w-28 rounded-xl font-bold transition duration-300 hover:bg-amber-300 cursor-pointer'>Traditional</button>
            <button className='border-2 h-9 w-28 rounded-xl font-bold transition duration-300 hover:bg-amber-300 cursor-pointer'>Modern</button>
            <button className='border-2 h-9 w-28 rounded-xl font-bold transition duration-300 hover:bg-amber-300 cursor-pointer'>Luxury</button>
            <button className='border-2 h-9 w-28 rounded-xl font-bold transition duration-300 hover:bg-amber-300 cursor-pointer'>Filter </button>
      </div>
      <div>
            <h1 className='font-bold m-5 text-3xl'>Latest Designs</h1>
      </div>
      <div>
 <Bottom/>
      </div>
     
    
    </div>
  )
}

export default header
