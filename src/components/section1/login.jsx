import React from 'react'

const Login = () => {
  return (
    <div className='fixed inset-0 bg-black/50 flex justify-center items-center gap-10'>
            <div className='h-[30%] w-[40%] bg-white/50 rounded-4xl flex flex-col  justify-center items-center'>

                        <label htmlFor="email" className='text-xl text-bold'>Email : </label>
                        <input className='bg-black/50  h-[20%] w-[30%] rounded-2xl' type="email" name="email" id="" />
                        
                           <label htmlFor="" className='text-xl text-bold'>Password :</label>
                        <input className='bg-black/50  h-[20%] w-[30%] rounded-2xl' type="password" name="password" id="" />

                        <div className=''>
                          <button className='bg-blue-600 text-white text-bold p-2 pl-3 pr-3 rounded-2xl mt-10 mr-15' type="submit">Submit</button>
                          <button className='bg-blue-600 text-white text-bold p-2 pl-3 pr-3 rounded-2xl mt-10' type="submit">Clear</button>

                        </div>
                        
                       
            </div>
      
    </div>
  )
}

export default Login
