import React, { useState, useEffect } from 'react';
import { SlArrowRight } from "react-icons/sl";
import './style.css'; // Custom CSS file
import Itemscart from './itemscart';
import { useSelector } from 'react-redux';

function Addtocart({ isShow }) {

  const cartItems = useSelector((state) => state.cart.cart);
  console.log(cartItems);

  const [isVisible, setIsVisible] = useState(true);
  const [isHidden, setIsHidden] = useState(false);

  // Use effect to reset states when `isShow` changes
  useEffect(() => {
    if (isShow) {
      setIsHidden(false);
      setIsVisible(true); // Reset visibility when cart is shown again
    }
  }, [isShow]);

  const hideCart = () => {
    setIsVisible(false); // Start the animation
    setTimeout(() => {
      setIsHidden(true); // After animation ends, hide the cart completely
    }, 500); // Match the CSS transition time (500ms)
  };

  return (
    <>
      {!isHidden && (
        <div className={`cartcss ${!isVisible ? "slide-right" : ""} overflow-hidden z-40 ${!isShow ? "flex" : "hidden" } w-[320px] rounded-l-[40px] top-[3.5rem] h-[85vh] fixed bg-white gray-300 carsshadow right-0`}>
          <button className='h-full w-4 ml-2' onClick={hideCart}>
            <SlArrowRight className='text-xl cursor-pointer text-gray-500' />
          </button>

          <div className='h-full static w-[95%] block'>
            <h1 className='relative text-center text-xl mt-2 font-medium'>Cart <span className='text-[#008a0e]'>Items</span></h1>

            <div className='h-[72%] ml-3 gap-3 mt-4 flex flex-col w-[92%] flex-wrap overflow-y-auto'>

              { cartItems.length > 0 ? cartItems.map((item) => {
                return (
                <Itemscart key={item.id} qty={item.qty} title={item.title} price={item.price} images={item.images} reating={item.rating} />)
              }): <h3 className='font-medium fixed text-xl top-[48%] right-[5.4%] text-gray-500'>No items in cart</h3>}

            </div>

            <div className='bottom-[7.5rem] fixed'>
              <h3 className='font-medium'>Total : <span className='text-[#008a0e]'> ৳200</span></h3>
              <h4 className='font-medium'>Total Items: <span className='text-[#008a0e]'> 3</span></h4>
            </div>
            <button className='fixed px-6 py-2 bg-[#008a0e] text-white rounded-lg bottom-[4.5rem] right-[6.5rem]'>Buy Now</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Addtocart;
