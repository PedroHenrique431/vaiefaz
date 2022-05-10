import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdBuild } from "react-icons/md";
import { Button } from "./Button";
import './Navbar.css';
import {IconContext} from 'react-icons/lib'

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const[button, setButton] = useState(true);

  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
      if(window.innerWidth <= 960){
          setButton(false)
      }else{
          setButton(true)
      }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
    <IconContext.Provider value={{color: '#fff'}}>
      <div className="navbar">
        <div className="navbar-container container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <MdBuild className="navbar-icon" /> Vai e Faz
          </Link>

          <div className="menu-icon" onClick={handleClick} >
            {click ? <FaTimes /> : <FaBars />}
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/Sobre" className="nav-links" onClick={closeMobileMenu}>
                Sobre
              </Link>
            </li>

            <li className="nav-btn">
                {button ? (
                    <Link to='/Contato'className="btn-link">
                        <Button buttonStyle='btn--outline'>Contato</Button>
                    </Link>
                ) : (
                    <Link to='/Contato' className="btn-link" onClick={closeMobileMenu}>
                        <Button buttonStyle='btn--outline' buttonSize='btn--mobile'>Contato</Button>
                    </Link>
                )}
            </li>
          </ul>
        </div>
      </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
