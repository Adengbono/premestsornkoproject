import React from 'react';
import HeroSection from '../../Components/HeroSection';
import { homeObjOne,/* homeObjTwo*/ homeObjThree/*, homeObjFour */} from './Data';
//import Pricing from '../../Components/Pricing';

function SignUp() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
      <LogInComponent/>
    </>
  );
}

export default SignUp;
 