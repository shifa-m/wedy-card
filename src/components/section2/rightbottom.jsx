import React from 'react'

const Rightbottom = () => {
  return (
    <div className='flex flex-wrap w-full justify-center'>

      <div className='h-auto w-[95%] sm:w-[90%] bg-gray-300 m-3 rounded-2xl flex flex-wrap items-center'>

       
        <div className='h-32 w-32 sm:h-40 sm:w-40 bg-gray-400 m-5 rounded-2xl'></div>

        <div className='flex flex-col justify-center'>
          <h1 className='mt-2 font-bold text-xl sm:text-2xl'>Golden Royale</h1>
          <h1 className='font-bold text-lg'>$45</h1>
          <h1>Min.100 pcs</h1>
        </div>

       
        <div className='ml-auto mr-5 flex flex-col items-center'>
          <h1 className='font-bold text-lg sm:text-xl'>Add to Cart</h1>

          <div className='border w-28 h-10 flex items-center justify-around rounded-xl bg-gray-200 mt-3'>
            <button className='h-6 w-6 border rounded-full'>+</button>
            <span>400</span>
            <button className='h-6 w-6 border rounded-full'>-</button>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Rightbottom