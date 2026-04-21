import React, { useState } from 'react'
import Bottom from './bottom'

const Content = () => {

  const [Showsignup, setShowsignup] = useState(false)

  const [Showlogin, setShowlogin] = useState(false)

  


  return (
    <div>

      
      <div className='flex justify-center mt-24 px-2'>

        
        <div className='flex flex-wrap gap-3 
                        lg:h-14 lg:w-[40%] 
                        md:h-12 md:w-[55%] 
                        w-full 
                        rounded-full items-center justify-center
                        bg-gradient-to-br from-pink-300 via-purple-300 to-blue-300 fixed'>

          <button className='px-4 py-1 font-bold hover:text-white'>Traditional</button>
          <button className='px-4 py-1 font-bold hover:text-white'>Modern</button>
          <button className='px-4 py-1 font-bold hover:text-white'>Luxury</button>
          <button className='px-4 py-1 font-bold hover:text-white'>Filter</button>

        </div>
      </div>

      
      <div className='mt-6 flex justify-end gap-3 px-4 font-bold 
                      text-sm sm:text-base md:text-lg'>
        
        <button className='px-4 py-1 sm:px-5 sm:py-2 
                           rounded-full transition hover:bg-[#b28dee] hover:text-white'
                           
                onClick={()=>setShowsignup(true)}           >
          Sign in
        </button>
        {Showsignup && alert("Sign up Form Opened")}

        <button className='px-4 py-1 sm:px-5 sm:py-2 
                           rounded-full transition hover:bg-[#b28dee] hover:text-white'
                           onClick={()=>setShowlogin(true)}>
          Log in
        </button>
        {Showlogin && alert("Login Form has been Opened") }

      </div>

      <div className='flex justify-center text-center mt-10 px-4'>
        <h1 className='font-bold'>

          <span className='text-3xl sm:text-5xl md:text-6xl text-white'>
            Wedding Cards
          </span><br />

          <span className='text-sm sm:text-lg text-gray-700'>
            When two hearts choose each other,
          </span><br />

          <span className='text-sm sm:text-lg text-gray-700'>
            a new story begins to bloom.
          </span><br />

          <span className='text-sm sm:text-lg text-gray-700'>
            Let your invitation whisper the magic of that moment.
          </span>

        </h1>
      </div>

      
      <div className='mt-10 px-4'>
        <h1 className='font-bold text-xl sm:text-2xl md:text-3xl'>
          Latest Designs
        </h1>
      </div>

      <div className='mt-5 px-4'>
        <Bottom />
      </div>

    </div>
  )
}

export default Content