import React from 'react'
import './style.css'
import { HiArchive } from "react-icons/hi";
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";

function Itemscart({ title, price, images, reating, qty }) {
  return (
    <div className='flex shadowlgx items-center justify-between w-full h-[70px]  overflow-hidden rounded-lg'>
        <img className='w-[70px] h-[70px]' src={images} alt="img" />
        <div className='flex flex-col mr-11 mt-[-10px]'> 
          <p className='font-medium text-lg'>{title.slice(0, 8)}</p>
          <p className='text-[#008a0e] mt-[-6px] text-lg font-medium'>৳{price}</p>
        </div> 
        <div className='flex flex-col gap-2 mr-3'>
         <HiArchive className='ml-[30px] cursor-pointer' />
         <div className='flex justify-center items-center gap-1 font-semibold '>
           <CiSquarePlus className='cursor-pointer' /> <span>{qty}</span> <  CiSquareMinus  className='cursor-pointer' />
         </div>
        </div>
    </div>
  )
}

export default Itemscart