import React from 'react';
import './buttonToTop.css'

import {FaArrowUp} from 'react-icons/fa'


function BottonToTop() {

    const scrollToTop = () =>{
        
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
         
        });
      };

      
    return (
        <button id="buttonToTop" onClick={scrollToTop} >
          <FaArrowUp id='icon-to-up'/>
        </button>
    );

}

export default BottonToTop