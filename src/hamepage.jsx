import Menu from './landingpage/menu.jsx';
import Hero from './landingpage/hero.jsx';
import Addtocart from './landingpage/cart/addtocart';
import React, { useState } from 'react';

function Homepage() {
  const [isShow, setIsShow] = useState(true); // Cart is hidden by default

  return (
    <>
      <Addtocart isShow={isShow} setIsShow={setIsShow} /> {/* Controls cart visibility */}
      <Menu setIsShow={setIsShow} isShow={isShow}  /> {/* Pass setIsShow to Menu */}
      <Hero />
    </>
  );
}

export default Homepage;
