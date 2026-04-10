import React from 'react'

const Cards = ({ data = [] }) => {   // ✅ default value fix
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-items-center p-5'>
      
      {data.map((item) => (
        <div key={item.id} className='w-[300px] rounded-3xl bg-white shadow-lg overflow-hidden'>
          
          <img 
            src={item.image} 
            alt={item.title}
            className='h-[300px] w-full object-fit'
          />

          <div className='p-4'>
            <h1 className='text-xl font-bold'>{item.title}</h1>
            <h2 className='text-lg font-semibold'>₹{item.price}</h2>

            <button className='bg-[#845ec2] h-9 w-full rounded-xl mt-3 text-white hover:bg-purple-700'>
              Customize & Order
            </button>
          </div>

        </div>
      ))}

    </div>
  )
}

export default Cards