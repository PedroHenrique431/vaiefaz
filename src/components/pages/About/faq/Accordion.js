import React, { useState } from 'react';
import { Data } from './Data';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';
import '../About.css'


const Accordion = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (

    
    <IconContext.Provider value={{ color: '#f00946', size: '25px' }}>
      <div className='titulo'><h1>Perguntas Frequentes</h1></div>
      <div className="AccordionSection">
        <div className="Container">
          {Data.map((item, index) => {
            return (
              <>
                <div className="Wrap" onClick={() => toggle(index)} key={index}>
                  <h1>{item.question}</h1>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </div>
                {clicked === index ? (
                  <div className="Dropdown">
                    <p>{item.answer}</p>
                  </div>
                ) : null}
              </>
            );
          })}
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Accordion;