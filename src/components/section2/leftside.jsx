import React from 'react'

const leftside = () => {

            return (


                        <div>

                                    <div className='bg-gray-200 h-[40%] w-[50%] m-10 rounded-2xl'>
                                                <h1 className='h-15 w-full bg-gray-300  rounded-t-2xl p-3 font-bold text-xl'>Order Summary</h1>
                                                <h1 className='h-15 p-4 font-bold '>Delivery Fee <span className='pl-[60%]'>Free</span></h1>
                                                <h1 className='h-15 p-4 font-bold'>Total <span className='pl-[70%] text-2xl'>11,999</span></h1>
                                                <button className='h-10 w-[70%]  bg-[#b28dee] transition duration-300 hover:text-2xl cursor-pointer ml-15 rounded-xl  mt-8 font-black text-xl text-white'
                                                 onClick={()=>
                                                alert("Your Order Has been Confirmed And You Will Receive Your Further Updates on Whatsapp")}>Confirm</button>

                                    </div>
                                    <div className='bg-gray-200 h-[40%] w-[50%] m-10 rounded-2xl'>
                                                <h1 className='h-15 w-full bg-gray-300  rounded-t-2xl p-3 font-bold text-xl'>Order Summary</h1>
                                                <h1 className='h-15 p-4 font-bold '>Delivery Fee <span className='pl-[60%]'>Free</span></h1>
                                                <h1 className='h-15 p-4 font-bold'>Total <span className='pl-[70%] text-2xl'>11,999</span></h1>
                                                <button className='h-10 w-[70%] transition duration-300 hover:text-2xl cursor-pointer  bg-[#b28dee] ml-15 rounded-xl  mt-8 font-black text-xl text-white' 
                                                onClick={()=>
                                                alert("Your Order Has been Confirmed And You Will Receive Your Further Updates on Whatsapp")}>Confirm</button>

                                    </div>
                        </div>

            )
}

export default leftside
