import React from 'react';
import HeroSection from '../../Components/HeroSection';
import { homeObjOne, homeObjTwo/*, homeObjThree, homeObjFour*/ } from './Data';
//import Pricing from '../../Components/Pricing';

function Products() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
    </>
  );
}

export default Products;

