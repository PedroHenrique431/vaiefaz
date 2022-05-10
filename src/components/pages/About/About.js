import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjTwo, homeObjThree, homeObjFive } from '../HomePage/Data';

function About() {
  return (
    <>
      
      <HeroSection {...homeObjFive} />
      
    </>
  );
}

export default About;