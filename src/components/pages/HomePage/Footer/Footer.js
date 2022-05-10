import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa';
import { MdBuild } from "react-icons/md";

function Footer() {
  return (
    <div className='footer-container'>
            
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <MdBuild className='navbar-icon' />
              Vai e Faz
            </Link>
          </div>
          <small className='website-rights'>Vai e Faz © 2022 </small>

          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to={'//www.facebook.com/'}
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </Link>
            <Link
              className='social-icon-link'
              to={'//www.instagram.com/'}
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </Link>
            
            <Link
              className='social-icon-link'
              to={'//www.twitter.com/'}
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter />
            </Link>
            
          </div>
        </div>
        <a href='/creditos' style={{color: '#292d3f', opacity: 0.3}}>créditos</a>
      </section>
    </div>
  );
}

export default Footer;