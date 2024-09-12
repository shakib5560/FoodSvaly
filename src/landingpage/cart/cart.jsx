import React from 'react'
import Catagory from './catagory'
import Fooditems from './fooditems'
import FoodData from "../../data/FoodData"

export default function Cart() {
  return (
    <>
    
    <Catagory />
    <div className='w-[82%] flex-wrap flex items-center justify-center gap-[3%] ml-[9%] mr-[9%]'>
      {
        FoodData.map((food) => {
          return (
            <Fooditems id={food.id}
             images={food.img}
              title={food.name}
               desc={food.desc}
                price={food.price}
                 rating={food.rating}
                 category={food.category} />
          )
        })
      }
    </div> 
    </>
  )
}
