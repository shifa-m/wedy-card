import React from 'react'
import Bottom from './bottom'
import Content from './content'
import { Menu ,House ,Pencil,Heart } from 'lucide-react';
import { UserRoundPen , ShoppingCart , SearchCode} from 'lucide-react';


const header = () => {
  return (
    <div className=' w-full  '>
      <div className='text-black w-full top-0 fixed h-20 font-bold text-xl  flex justify-around items-center  bg-gray-200 '>
        <h1 className='flex   font-bold text-3xl'><Menu className='mt-2' />Wedy</h1>
        <h1 className='flex '>  <House className='mt-1' /> Home</h1>
        <h1 className='flex '><Pencil className='mt-1' /> Customized</h1>
        <h1 className='flex '> <Heart className='mt-1' /> Order</h1>
        <h1 className='flex '> <UserRoundPen className='mt-1' />Profile</h1>
        <h1 className='flex '> <ShoppingCart className='mt-1' />Cart</h1>
        <input placeholder='What are you looking for??' className='w-[30%] h-15 bg-gray-400 rounded-4xl pl-7'>
        </input>
        <SearchCode />
        <h1>Sign Up</h1>
        <button className='h-13 bg-red-500 w-[6%] rounded-4xl  text-white'>Log in</button>



      </div>
      <Content />


    </div>
  )
}

export default header
