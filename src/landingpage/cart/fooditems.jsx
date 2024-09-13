import React from 'react'
import './style.css'
import { FaStar } from "react-icons/fa";
import { BiSolidCart } from "react-icons/bi";
import { useState } from 'react';
import {useDispatch} from 'react-redux'
import { addToCart } from '../../Redux/slices/CartSlice';

function Fooditems({id,images,title,desc,price,rating,category}) {

  const dispatch = useDispatch();

const addtocartbtn = () => {
    dispatch(addToCart({id,images,title,price,rating, qty: 1}))
}

  return (
    <div className='lg:w-[30%] sm:w-[70%] md:w-[50%] w-[85%] flex justify-between flex-col items-center mt-[170px] shadowmain rounded-[40px] h-[340px] bg-[#F3F8F4]'>
      <div id='cardsfood' className='overflow-hidden h-[380px] w-[80%] flex justify-center items-center'>
        <img className='hover:scale-110 duration-300 h-[230px]' src={images} alt={category} />
      </div>


<div className='h-full w-[82%] mt-8 ml-[50px] mr-[9%]'>
     <div className='flex justify-between w-[80%]'>
        
       <h1 className='text-3xl font-medium'>{title.slice(0, 10)}...</h1> 

       <div className=" flex text-xl font-medium items-center mr-[-34px] gap-1"><FaStar className='text-yellow-400 text-2xl mb-[2px]' /> <span className='text-gray-500'>{rating}</span></div>
      </div>

      <p className='text-gray-500 text-lg mt-2'>{desc.slice(0, 45)}...</p>

      <div className='flex justify-between w-[80%] mt-10'>
        <h1 className='text-2xl font-bold'>৳{price}<span className=' ml-1 text-sm font-normal text-gray-400 line-through'>৳200</span></h1>
        <button onClick={addtocartbtn} className={`hover:scale-110  duration-500 ease-in-out shadow-lg flex mr-[-34px] mt-[-5px] items-center gap-3 border-solid border-[3px] border-[#008a0e] rounded-lg p-2 font-medium`}> Add To Cart <BiSolidCart/></button>
      </div>
       </div>
    </div>
  )
}

export default Fooditems