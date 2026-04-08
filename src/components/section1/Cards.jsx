import React from 'react'

const Cards = () => {
  return (
    <div className='grid  justify-around'>
      <div className=' h-100 w-90 m-7 rounded-3xl '>
        <h1 className='bg-gray-300 h-70 rounded-3xl'></h1>
        <div className='m-5 '>
          <h1 className='text-xl font-bold ml-1'>Golden Royale</h1>
          <h1 className='text-xl font-bold ml-1'>$45</h1>
          <button className='bg-red-500 h-9 w-80 rounded-xl mt-2 text-white'>Add to Cart</button>

        </div>
      </div>
      <div className='  m-7 rounded-3xl'>
        <h1 className='bg-gray-300 h-70 rounded-3xl'></h1>
        <div className='m-5 '>
          <h1 className='text-xl font-bold ml-1'>Golden Royale</h1>
          <h1 className='text-xl font-bold ml-1'>$45</h1>
          <button className='bg-red-500 h-9 w-80 rounded-xl mt-2 text-white'>Add to Cart</button>

        </div>
      </div>
    </div>

  )
}
export default Cards
