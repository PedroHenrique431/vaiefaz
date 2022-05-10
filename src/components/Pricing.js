import React from 'react';
import { Button } from './Button';
import './Pricing.css';
import { MdComputer } from 'react-icons/md';
import { ImLibreoffice } from 'react-icons/im';
import { BiWorld } from 'react-icons/bi';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className='pricing__section'>
        <div className='pricing__wrapper'>
          <h1 className='pricing__heading' >Soluções mais requisitadas</h1>
          <div className='pricing__container' id='preços'>

            <Link to='/Contato' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                <ImLibreoffice />
                  
                </div>
                <h3>Office</h3>
                <h4>R$9.99</h4>
                <ul className='pricing__container-features'>
                  <li>Validar</li>
                  <li>Instalar</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  Contato
                </Button>
              </div>
            </Link>

            <Link to='/Contato' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                <MdComputer />
                </div>
                <h3>Sistema</h3>
                <h4>R$9.99</h4>
                <ul className='pricing__container-features'>
                  <li>Formatar</li>
                  <li>Resolver Bugs</li>
                  <li>Instalar</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor=''>
                  Contato
                </Button>
              </div>
            </Link>

            <Link to='/Contato' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <BiWorld />
                </div>
                <h3>Demais Programas</h3>
                <h4>R$9.99</h4>
                <ul className='pricing__container-features'>
                  <li>Instalar</li>
                  <li>Validar</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  Contato
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Pricing;