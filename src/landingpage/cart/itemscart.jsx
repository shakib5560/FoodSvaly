import React from 'react'
import './style.css'
import { HiArchive } from "react-icons/hi";
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";

function Itemscart() {
  return (
    <div className='flex shadowlgx items-center justify-between w-full h-[70px]  overflow-hidden rounded-lg'>
        <img className='w-[70px] h-[70px]' src="https://img.freepik.com/free-photo/seafood-pizza_74190-5944.jpg?w=996&t=st=1693062328~exp=1693062928~hmac=53fd9ad496580db41c6ca8066510cd89c6b0a0389de8bb6b875a78a1eda09cb5" alt="img" />
        <div className='flex flex-col mr-11 mt-[-10px]'> 
          <p className='font-medium text-lg'>Onion Pizza</p>
          <p className='text-[#008a0e] mt-[-6px] text-lg font-medium'>$150</p>
        </div> 
        <div className='flex flex-col gap-2 mr-3'>
         <HiArchive className='ml-[30px]' />
         <div className='flex justify-center items-center gap-1 font-semibold '>
           <CiSquarePlus /> <span>1</span> < CiSquareMinus />
         </div>
        </div>
    </div>
  )
}

export default Itemscart