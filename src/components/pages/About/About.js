import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjFive } from '../HomePage/Data';
import './About.css'
import Accordion from './faq/Accordion';

function About() {

  return (
    <>
      
      <HeroSection {...homeObjFive} />
      <Accordion/>
      
    </>
  );
}

export default About;