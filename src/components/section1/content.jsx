import React from 'react'
import Bottom from './bottom'

const Content = () => {
            return (
                        <div className=''>
                                    <div className='flex  m-10  ml-[35%] top-15  h-15 w-[30%] rounded-4xl bg-gray-400 items-center fixed bg-[linear-gradient(to_left_bottom,#eb96c6,#dd99d2,#cc9cdc,#b8a0e3,#a3a4e7,#91adf0,#7db6f6,#69bff8,#52cffe,#41dfff,#46eefa,#5ffbf1)]'>
                                                <button className=' h-9 w-28 mr-15 ml-10 rounded-xl font-bold transition duration-300 hover:text-xl  hover:text-white cursor-pointer'>Traditional</button>
                                                <button className=' h-9 w-28 mr-15 rounded-xl font-bold transition duration-300 hover:text-xl  hover:text-white cursor-pointer'>Modern</button>
                                                <button className=' h-9 w-28 mr-15 rounded-xl font-bold transition duration-300  hover:text-xl  hover:text-white cursor-pointer'>Luxury</button>
                                                <button className=' h-9 w-28 mr-15 rounded-xl font-bold transition duration-300 hover:text-xl hover:text-white cursor-pointer'>Filter </button>
                                    </div>
                                    <div className='flex justify-center  mt-20 pt-30  '>
                                                <h1 className='font-bold text-2xl'><span className='text-7xl ml-10 text-white'>Wedding Cards</span><br />
                                                            <span className='font-semibold ml-28 text-gray-700 text-xl'>When two hearts choose each other,</span><br />
                                                            <span className='font-semibold mt-10 ml-35 text-gray-700 text-xl'>a new story begins to bloom.</span><br />
                                                            <span className='text-gray-700 font-semibold ml-10 text-xl'>Let your invitation whisper the magic of that moment.</span></h1>
                                    </div>
                                    <div>
                                                <h1 className='font-bold  m-5  text-3xl'>Latest Designs</h1>
                                    </div>
                                    <div>
                                                <Bottom />
                                    </div>
                        </div>

            )
}

export default Content
