import React from 'react'
import './Confirmado.css'
import HeroSection from '../../HeroSection';
import { homeObjFour } from '../HomePage/Data';

function Confirmado() {
  return (
    <div className='conf-container'>

        
        <HeroSection {...homeObjFour} />
    </div>
  )
}

export default Confirmado