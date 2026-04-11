import React from 'react'
import Bottom from './bottom'
import Content from './content'
import { Menu, House, Pencil, Heart } from 'lucide-react';
import { UserRoundPen, ShoppingCart,  EllipsisVertical } from 'lucide-react';




const Header = () => {
  return (
    <div className='w-full'>
      
     
      <div className='text-black w-full fixed top-0 h-16 flex justify-between items-center px-4 bg-[#ffe8ff]'>

       
        <h1 className='flex items-center gap-2 font-bold text-xl sm:text-2xl md:text-3xl'>
          <Menu className='md:hidden' /> 
          Wedy
        </h1>

     
        <div className='hidden md:flex gap-6 items-center lg:font-bold'>
          <h1 className='flex items-center gap-1'><House /> Home</h1>
          <h1 className='flex items-center gap-1'><Pencil /> Customized</h1>
          <h1 className='flex items-center gap-1'><Heart /> Order</h1>
          <h1 className='flex items-center gap-1'><ShoppingCart /> Cart</h1>
           <h1 className='flex items-center gap-1'><UserRoundPen /> Profile</h1>
        </div>

        <div className='flex items-center gap-3'>
          
          <input 
            placeholder='Search...' 
            className='hidden lg:block w-60 h-10 bg-gray-300 rounded-full px-4'
          />

         
          <EllipsisVertical />

        </div>

      </div>

     
      <div className='pt-20'>
        <Content />
      </div>

    </div>
  )
}

export default Header