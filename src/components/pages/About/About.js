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
      
      <h2> FAQs </h2>

      <section className='sectionn'>
      <div className='faq'>

        <div className='pergunta'>
          <h3>ue 1</h3>
          <svg width="15" height="10" viewBox="0 0 42 25">
            <path d="M3 3L21 21L39 3" stroke='black' strokeWidth="7" strokeLinecap="round" />
          </svg>
        </div>
        <div className='resposta'>
          <p>OLHA A RESPOSTA AQUI</p>
        </div>

      </div>

      <div className='faq'>

        <div className='pergunta'>
          <h3>ue 2</h3>
          <svg width="15" height="10" viewBox="0 0 42 25">
            <path d="M3 3L21 21L39 3" stroke='black' strokeWidth="7" strokeLinecap="round" />
          </svg>
        </div>
        <div className='resposta'>
          <p>OLHA A RESPOSTA AQUI.</p>
        </div>

      </div>

      <div className='faq'>

        <div className='pergunta'>
          <h3>ue 3</h3>
          <svg width="15" height="10" viewBox="0 0 42 25">
            <path d="M3 3L21 21L39 3" stroke='black' strokeWidth="7" strokeLinecap="round" />
          </svg>
        </div>
        <div className='resposta'>
          <p>OLHA A RESPOSTA AQUI</p>
        </div>

      </div>
      </section>
    </>
  );
}

export default About;