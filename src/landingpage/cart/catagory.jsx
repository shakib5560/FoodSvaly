import React from 'react'
import './style.css'

function Catagory() {
  return (
    <div className='flex justify-center items-center w-[82%] h-auto ml-[9%] mr-[9%] mt-20 mb-10 flex-col'>
      <h1 className='text-[#060606] lg:text-[44px] text-[30px] text-center lg:text-left font-bold leading-[3.3rem]'>Our<span className='text-[#008a0e]'> Menu</span></h1>
      
      <p
        className='text-[#6B7280] text-center lg:text-[16.5px] text-[18px] md:text-[15px] font-medium mt-5'>
        Where every bite tells a story of culinary
        artistry and passion. explore our diverse menu and savor a symphony of flavors cafted just for
        you. Explore our diverse menu and savor a symphony of flavors cafted just for
        you. Our diverse menu and savor a symphony of flavors cafted just for
        you.
      </p>

      <div className='mt-10 flex flex-wrap justify-center gap-8 '>
         <button className='px-8 py-1 pb-2 font-medium rounded-lg  text-white bg-[#008a0e] shadowsb'>ALL</button>
         <button className='px-8 py-1 pb-2 font-medium rounded-lg bg-white shadowsb'>Lunch</button>
         <button className='px-8 py-1 pb-2 font-medium rounded-lg bg-white shadowsb'>Breakfast</button>
         <button className='px-8 py-1 pb-2 font-medium rounded-lg bg-white shadowsb'>Dinner</button>
         <button className='px-8 py-1 pb-2 font-medium rounded-lg bg-white shadowsb'>Snacks</button>
      </div>

    </div>
  )
}

export default Catagory