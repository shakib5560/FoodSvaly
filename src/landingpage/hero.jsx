import React from 'react'
import banner from '../assets/banner.jpg'
import './style.css';
import banners from '../assets/banner2.jfif'
import image from '../assets/image.jfif'
import image2 from '../assets/images2.jfif'
import image3 from '../assets/images3.jfif'
import image4 from '../assets/images4.jfif'
import cooks from '../assets/cooks.png'
import { IoVideocamOutline } from "react-icons/io5";
import food from  '../assets/food.jfif'
import food2 from '../assets/food2.jfif'
import images5 from '../assets/food4.png'
import fast from '../assets/fast.png'
import Cart from './cart/cart';


export default function Hero() {
return (
<>

  {/* Hero */}
  <div className='w-[84%] lg:mt-[-3%] h-[700px] lg:flex justify-between ml-[9%] mr-[9%] items-center'>
    <div>
      <h1
        className=' text-[#060606] mt-6 lg:text-[44px] text-[30px] text-center lg:text-left font-bold leading-[3.3rem]'>
        Welcome To <span className='text-[#008a0e]'> Food-Savly </span> <br /> Fast Foods Restaurant</h1>
      <p
        className='text-gray-600 text-center lg:text-xl text-[16px] md:text-[18px] lg:text-[20px] lg:text-left font-medium mt-5'>
        Where every bite tells a story of culinary
        artistry and <br /> passion. explore our diverse menu and savor a <br /> symphony of flavors cafted just for
        you.
      </p>
      <button
        className=' ml-24 sm:ml-[155px] md:ml-[250px] lg:ml-0 buttonshadow bg-[#008a0e] text-white font-medium text-lg py-5  px-10 mt-8 rounded-lg'>Book
        Your Table</button>
    </div>
    <div className='lg:w-[47%] sm:w-[100%] mt-9 h-auto'> <img className='rounded-3xl shadow-2xl' src={banner}
        alt="banner" /></div>
  </div>


  {/* About */}
  <div className=' ml-[9%] mr-[9%] flex flex-col gap-5 justify-center items-center mt-8 md:mt-[30%] lg:mt-8'>
    <h2 className='text-[#060606] lg:text-[44px] text-[30px] text-center lg:text-left font-bold leading-[3.3rem]'>About
      <span className='text-[#008a0e]'> Us</span> </h2>
    <h5 id='cssj' className='text-gray-600 text-lg text-center lg:text-left font-medium mt-5'> <span
        className='text-[#0e0b31]'> At Flavour Fusion,</span> we believe in the power of culinary artistry to create
      memorable dining experiences. Our journey began with a
      passion for blending flavors, textures, and aromas to delight our guests' senses. With a commitment to quality
      ingredients and
      innovative techniques we strive to offer menu.
    </h5>
  </div>
  <section className=' mt-20 mb-12 ml-[9%] mr-[9%]'>
    <div className='flex flex-col items-center sm:flex-row md:flex-row lg:flex-row justify-between gap-2'>
      <div className='pb-2 flex rounded-xl flex-col justify-center h-40 w-[300px]  items-center bg-slate-100'>
        <h1 className='text-[44px] font-bold text-gray-900 '>5000+</h1>
        <p className=' font-medium   text-[#008a0e]'>Happy Customers</p>
      </div>
      <div className='pb-2 flex rounded-xl flex-col justify-center h-40 w-[300px]  items-center bg-slate-100'>
        <h1 className='text-[44px] font-bold text-gray-900 '>30+</h1>
        <p className=' font-medium   text-[#008a0e]'>Awads & Price</p>
      </div>
      <div className='pb-2 flex rounded-xl flex-col justify-center h-40 w-[300px]  items-center bg-slate-100'>
        <h1 className='text-[44px] font-bold text-gray-900 '>999+</h1>
        <p className=' font-medium   text-[#008a0e]'>Special Events</p>
      </div>
      <div className='pb-2 flex rounded-xl flex-col justify-center h-40 w-[300px]  items-center bg-slate-100'>
        <h1 className='text-[44px] font-bold text-gray-900 '>299+</h1>
        <p className=' font-medium   text-[#008a0e]'>Positive Feedback</p>
      </div>
    </div>
  </section>
  <section>
    <div className='flex justify-center w-[82%] ml-[9%] mr-[9%] mt-20 mb-20'><img className=' rounded-[34px] shadow-2xl'
        src={banners} alt="banner" /></div>
  </section>

  {/* Special */}
  <div className='bgs mb-28'>
    <div className='w-[84%]  h-[100%] flex flex-wrap justify-between ml-[9%] mr-[9%] items-center'>

      <div className='lg:w-[32.5%] sm:w-full mt-20 h-auto'>
        <img className='rounded-3xl shadow-2xl' src={image} alt="" />
        <div className='flex justify-between w-[49%] gap-[3%]  h-auto mt-[8px]'>
          <img className=' rounded-3xl' src={image2} alt="" />
          <img className=' rounded-3xl' src={image3} alt="" />
        </div>
      </div>

      <div className='lg:w-[35%] sm:w-full mt-20 h-auto'>
        <img className='rounded-3xl shadow-2xl' src={image4} alt="" />
      </div>

      <div className='lg:w-[30%] mt-20 h-auto mr-[-10px]'>
        <h2 className=' mb-4 text-5xl font-medium'>Our <span className='text-[#008a0e]'>Special</span> <br /> Dishes
        </h2>
        <div className='text-lg font-medium text-gray-500 ml-1'>Discover culinary delights that define excellence at
          Flavour Fusion with our Special Dishes.
        </div>
        <button
          className='bg-[#008a0e] buttonshadow text-white font-medium text-lg py-3 px-6  rounded-lg mt-6'>Order
          Now</button>
      </div>
    </div>
  </div>

  {/* Food Specialist */}
  <div className='lg:bg-[#F3F8F4] bjjm w-[100%] h-[100%] mt-[36rem] sm:mt-[60rem] md:mt-[80rem] lg:mt-0 lg:h-[800px] '>
    <section className=' ml-[9%] mr-[9%] h-full w-[82%] gap-[2%] lg:flex justify-between items-center'>

      <div className='lg:w-[53%] w-full h-full flex flex-col gap-1 justify-center'>
        <h2 className='text-4xl text-center lg:text-left leading-[49px] mb-4 lg:text-5xl font-bold lg:font-medium'>Meet Our Food Specialist<br />
          <span className='text-[#008a0e]'> Shamiul Shakib</span>
        </h2>
        <div className='text-lg text-center lg:text-left font-medium text-gray-500 ml-1'>Discover culinary delights that define excellence at
          Flavour Fusion with our Special Dishes. we believe in the power of culinary artistry to create memor dining
          experiences. Our journey began with a passion for blending flavors, textures, and aromas to delight our
          guests' senses. With a commitment to quality ingredients.
        </div>

        <section className='flex flex-col lg:flex-row items-center justify-between gap-4 mt-5 mr-24'>
          <div className='ml-24 mb-10 lg:ml-0 lg:mb-0'>
            <h3 className=' mb-14 mt-4 text-lg font-medium text-gray-800'>Passion For Cooking</h3>
            <span className=' ml-3 rounded-xl shadows p-10 text-3xl font-bold bg-slate-50'>99%</span>
           </div>
          
           <div className='ml-24 mb-10 lg:ml-0 lg:mb-0'>
            <h3 className=' mb-14 mt-4 text-lg font-medium text-gray-800'>Passion For Cooking</h3>
            <span className=' ml-3 rounded-xl shadows p-10 text-3xl font-bold bg-slate-50'>99%</span>
           </div>

           <div className='ml-24 mb-10 lg:ml-0 lg:mb-0'>
            <h3 className=' mb-14 mt-4 text-lg font-medium text-gray-800'>Passion For Cooking</h3>
            <span className=' ml-3 rounded-xl shadows p-10 text-3xl font-bold bg-slate-50'>99%</span>
           </div>
        </section>
        
        
        <div className='flex gap-8 mt-20 justify-center lg:justify-start'>
            <button className='bg-[#008a0e] text-white font-medium text-lg py-3 px-6 buttonshadow rounded-lg'>Contact Him</button>
            <button className='flex buttonshadow gap-2 bg-[#f1f1f1] text-gray-900 font-medium text-lg py-3 px-6 rounded-lg items-center'>Watch Now <IoVideocamOutline className='text-xl' /></button>
        </div>
        
      </div>

      <div className='lg:w-[40%] mt-20 lg:mt-0 h-full md:ml-24 flex md:w-[70%] justify-center items-center'>
        <img className='w-auto shadow-3xl' src={cooks} alt="" />
      </div>
    </section>
  </div>

  {/* Cart */}

  <Cart />

  {/* Our Food Gallery */}
  <div className='lg:bg-[#ffffff] bjjm w-[100%] h-[100%] lg:h-[700px]'>
    
     <div className='ml-[9%] mr-[9%] mt-32 mb-10'>
      <h1 className='text-[#060606] mb-12 lg:text-[44px] text-[30px] text-center font-bold leading-[3.3rem]'>Our<span className='text-[#008a0e]'> Foods</span> Gallery</h1>
      <p className='text-lg text-center font-medium text-gray-500 ml-1'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat iure consectetur accusamus autem doloremque earum iusto repudiandae commodi vitae tempora nulla voluptatem nam obcaecati voluptatum soluta officia, consequuntur facere ducimus, eum maxime delectus. Suscipit, ipsam?</p>
     </div>


     <div className=' ml-[11%] mr-[9%] h-full w-[82%] gap-[2%] items-center lg:items-start flex-col lg:flex-row flex justify-between'>
       
        <div className='flex flex-col h-full lg:w-[55%] lg:gap-4'>
             
          <section className='flex justify-between h-[350px] w-full'>
            <div className='w-[49%] rounded-3xl overflow-hidden h-[322px] '>
               <img src={food} alt="" />
           </div>
               <div className='w-[49%] rounded-3xl h-[322px] overflow-hidden '>
                   <img src={food2} alt="" />
              </div>
       </section>

       <section>
        <div className=' w-full lg:mt-[-30px] sm:mt-[-75px] md:mt-[-15px] mt-[-145px]  rounded-3xl overflow-hidden h-[342px]'> <img src={images5} alt="" /></div>
       </section>
      </div>


        <div className='flex justify-center items-center h-full w-[45%]'>
          <img className='w-full hidden lg:block h-[90%] mb-16' src={fast} alt="" />
        </div>
     </div>

  </div>
</>
)
}
