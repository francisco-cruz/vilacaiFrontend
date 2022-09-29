import React from "react";
import {AiOutlineWhatsApp} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import './footerMain.css'

function FooterMain (){

    return (
        <>
        <div className="footer">
            <div id='text-vila'>
                <p>Vilaçaí</p>
                <div id="sociais">
                < AiOutlineWhatsApp id="icon-zap"/>
                < AiOutlineInstagram id="icon-insta" />
                </div>
            </div>
            <a id="contact" href="https://ciscoportifolio.netlify.app/" target="_blank" rel="noopener noreferrer">Contato do desenvolvedor</a>

        </div>
        </>
    )
}

export default FooterMain
