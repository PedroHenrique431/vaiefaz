import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjFive } from '../HomePage/Data';
import './About.css'
import Accordion from './faq/Accordion';
import Services from './Services/Index';

function About() {

  return (
    <>
      
      <HeroSection {...homeObjFive} />
      <Services/>
      <Accordion/>
      
    </>
  );
}

export default About;