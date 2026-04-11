import React from 'react'

const Leftside = () => {
  return (
    <div className='flex flex-col items-center gap-6 px-4 mt-6'>

      
      <div className='bg-gray-200 w-full sm:w-[80%] md:w-[60%] lg:w-[40%] rounded-2xl shadow'>

        <h1 className='w-full bg-gray-300 rounded-t-2xl p-3 font-bold text-lg sm:text-xl'>
          Order Summary
        </h1>

        <div className='p-4 space-y-3 font-bold'>

          <div className='flex justify-between'>
            <span>Delivery Fee</span>
            <span>Free</span>
          </div>

          <div className='flex justify-between text-lg sm:text-xl'>
            <span>Total</span>
            <span>11,999</span>
          </div>

        </div>

        <div className='flex justify-center pb-5'>
          <button 
            className='w-[80%] sm:w-[70%] h-10 bg-[#b28dee] rounded-xl text-white font-bold transition hover:scale-105'
            onClick={() =>
              alert("Your Order Has been Confirmed And You Will Receive Your Further Updates on Whatsapp")
            }
          >
            Confirm
          </button>
        </div>

      </div>

      
      <div className='bg-gray-200 w-full sm:w-[80%] md:w-[60%] lg:w-[40%] rounded-2xl shadow'>

        <h1 className='w-full bg-gray-300 rounded-t-2xl p-3 font-bold text-lg sm:text-xl'>
          Order Summary
        </h1>

        <div className='p-4 space-y-3 font-bold'>

          <div className='flex justify-between'>
            <span>Delivery Fee</span>
            <span>Free</span>
          </div>

          <div className='flex justify-between text-lg sm:text-xl'>
            <span>Total</span>
            <span>11,999</span>
          </div>

        </div>

        <div className='flex justify-center pb-5'>
          <button 
            className='w-[80%] sm:w-[70%] h-10 bg-[#b28dee] rounded-xl text-white font-bold transition hover:scale-105'
          >
            Confirm
          </button>
        </div>

      </div>

    </div>
  )
}

export default Leftside