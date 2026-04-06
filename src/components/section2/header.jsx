import React from 'react'

const header = () => {
  return (
    <div className='h-screen w-full '>
            <div className='h-10 m-10 ml-0 flex justify-between ml-7'>
                        
                        <h1 className='font-bold text-2xl  '>&lt;  Your Cart</h1>
                        <h1 className='font-bold text-2xl '>++</h1>
            </div>

            <div className='flex justify-between m-10'>
                        <button className='h-15 bg-gray-300 text-red-500 font-bold w-40 rounded-2xl '>+ Add New Item</button>
                        <button className='h-15 bg-red-500 text-white font-bold w-40 rounded-2xl'> & Remove All</button>
            </div>

            <div>
                        
            </div>
      
    </div>
  )
}

export default header
