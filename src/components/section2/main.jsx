import React from 'react'
import Rightbottom from './rightbottom'
import Leftside from './leftside'
import Header  from './header'

const main = () => {
  return (
    <div className='h-screen w-full  '>
      <Header/>
     
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
