import React from 'react';
import HeroSection from '../../Components/HeroSection';
import { homeObjOne, /*homeObjTwo,*/ homeObjThree, /*homeObjFour */} from './Data';
import Pricing from '../../Components/Pricing';

function Services() {
  return (
    <>
      <Pricing />
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
    </>
  );
}

export default Services;