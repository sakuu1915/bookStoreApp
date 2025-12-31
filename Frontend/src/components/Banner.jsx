import React from 'react'
import banner from "../assets/Banner.png"

function Banner() {
  return (
    <>
    {/* by default column but in medium devices row*/}
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10'>
     <div className='order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32'>
     <div className='space-y-12'>
     <h1 className='text-4xl font-bold'>
        Hello, welcomes here to learn something{" "} 
        <span className='text-pink-500'>new everyday!!!</span>
     </h1>
     <p className='text-xl'>
      "Discover books that inspire, entertain, and transform; whether you’re seeking wisdom, escape, or a spark of creativity, our shelves are filled with journeys waiting to be explored."
     </p>
     <label className="input input-bordered border border-gray-400 flex items-center gap-2 w-full max-w-md">
  {/* Email Icon */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="w-4 h-4 opacity-70"
  >
    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555Z" />
    <path d="M0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.809-1.144l-6.57-4.027L8 9.586l-1.239-.757ZM10.197 8.243 16 11.801V4.697l-5.803 3.546Z" />
  </svg>

  {/* Email Input */}
  <input
    type="email"
    className="w-full outline-none bg-transparent grow"
    placeholder="Email"
  />
</label>
 </div> 
      <button className="btn mt-6 mb-10 bg-pink-700 text-white px-10 py-4 text-lg border-none rounded-lg">Get Started</button>
     </div>
     <div className='order-1 w-full md:w-1/2'>
     <img src={banner} className="w-[350px] md:w-[880px] h-auto mt-6" alt=''/>
     </div>
    </div>
      
    </>
  )
}

export default Banner
