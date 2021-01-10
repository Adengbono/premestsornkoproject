import React from 'react';
import HeroSection from '../../Components/HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Pages/Home/Data';
import Pricing from '../../Components/Pricing';

function Home() {
  return (   
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} /> 
      <HeroSection {...homeObjTwo} />
      <Pricing />
      <HeroSection {...homeObjFour} />
    </>
  );
}
      
export default Home;       