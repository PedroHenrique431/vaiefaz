import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjFive } from '../HomePage/Data';
import './About.css'

function About() {
  
const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
 faq.addEventListener("click", () => {
   faq.classList.toggle("active");
 });
});



  return (
    <>
      
      <HeroSection {...homeObjFive} />
      
      
    </>
  );
}

export default About;