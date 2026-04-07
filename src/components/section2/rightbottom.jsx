import React from 'react'

const rightbottom = () => {
            return (
                        <div className='flex flex-wrap w-full'>
                                    <div className='h-50 w-[90%] bg-gray-300 m-3 rounded-2xl flex  '>
                                                <div className='h-40 bg-gray-400 w-50 mt-5 m-10 rounded-2xl flex   '>
                                                </div>
                                                <div >
                                                            <h1 className='mt-10 font-bold text-2xl '>Golden Royale  </h1>
                                                            <h1 className='font-bold text-xl'>$45</h1>
                                                            <h1>Min.100 pcs</h1>
                                                </div>
                                                <div className='mt-10 ml-[30%]'>
                                                            <h1 className='font-bold text-xl'>Add to Card</h1>
                                                            <h1 className=' border w-26 h-13 pl-2  rounded-xl bg-gray-200 mt-4'>
                                                                        <button className='h-6 w-6 mt-3 border rounded-2xl'>+</button> 400
                                                                        <button className='h-6 w-6 mt-3 border rounded-2xl'>-</button> </h1>

                                                </div>
                                    </div>

                        </div>



            )
}

export default rightbottom
