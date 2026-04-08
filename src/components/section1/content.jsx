import React from 'react'
import Bottom from './bottom'

const Content = () => {
            return (
                        <div>
                                    <div className='flex m-10 mt-25'>
                                                <button className='border-2 h-9 w-28 mr-15 rounded-xl font-bold transition duration-300 hover:bg-red-500 hover:text-white cursor-pointer'>Traditional</button>
                                                <button className='border-2 h-9 w-28 mr-15 rounded-xl font-bold transition duration-300 hover:bg-red-500 hover:text-white cursor-pointer'>Modern</button>
                                                <button className='border-2 h-9 w-28 mr-15 rounded-xl font-bold transition duration-300  hover:bg-red-500 hover:text-white cursor-pointer'>Luxury</button>
                                                <button className='border-2 h-9 w-28 mr-15 rounded-xl font-bold transition duration-300 hover:bg-red-500 hover:text-white cursor-pointer'>Filter </button>
                                    </div>
                                    <div className='flex justify-center mt-20'>
                                                <h1 className='font-bold text-2xl'><span className='text-7xl ml-10 text-red-500'>Wedding Cards</span><br />
                                                            <span className='font-semibold ml-22 text-gray-700'>When two hearts choose each other,</span><br />
                                                            <span className='font-semibold mt-10 ml-29 text-gray-700'>a new story begins to bloom.</span><br />
                                                            <span className='text-gray-700 font-semibold'>Let your invitation whisper the magic of that moment.</span></h1>
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
