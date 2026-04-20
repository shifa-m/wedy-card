import React from 'react'
import { ChevronLeft  } from 'lucide-react';


const header = () => {

  const removeAll =()=>{
        alert("All of Your Collected Items have been removed from your wishlist")
  }

  const Addnewitem =() =>{
    alert("Your New item has been Added in Your cart")
  }
  return (
    <div >
      
      
      <div className='flex justify-between m-10'>
        <button className='h-15 bg-[#b28dee] transition duration-300 hover:scale-95  text-white font-bold w-45 rounded-2xl lg:h-12 lg:w-35 ' onClick={Addnewitem} >+ Add New Item</button>
        <button className='h-15 bg-[#b28dee] transition duration-300 hover:scale-95 text-white font-bold w-45 rounded-2xl' onClick={removeAll}> & Remove All</button>
      </div>
    </div>
  )
}

export default header
