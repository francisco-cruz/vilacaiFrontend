import React, { useState, useEffect } from "react";
import ModalMaisInfo from "../modal/ModalMaisInfo";
import logo from '../../assets/images/logo.png'
import './headerContent.css'

function HeaderContent() {
    const[modalVisible, setModalVisible] = useState(false)

    const handleHora = () =>{
        const currentTime = new Date().toLocaleTimeString();
        let open = document.getElementById("state")

        if (currentTime <='18' || currentTime > '22'){
            open.classList.remove('active')
            open.classList = "closed"
            open.innerText = 'Fechado'

        } else {
            open.classList.remove = "closed"
            open.classList ='open'
            open.innerText ="Aberto"

        }

    }

    useEffect(() => {
        handleHora()
    }, [])


    // const handleNoScroll = () => {
    //   const body = document.getElementsByTagName('body')[0]
    //   body.classList.add('noScroll')
    // }

   function openModal() {
      setModalVisible(true)
      // handleNoScroll()
    }


    return (
        <div id="header-content">
            <div id="content-items">
            <p id="name-store">Vilaçaí</p>
            <div id="state-store">
                <p id="state"></p>

                <p id="more-infos" onClick={()=> openModal()}>Informações da loja</p>
                {modalVisible ? < ModalMaisInfo onClose={() => setModalVisible(false)} /> : null}
            </div>
            <div id="content-text">
                <p>Pedido mínimo:<b> R$ 12,00</b></p>
                <p id='obs'>Obs: Exeto para o Freitas, pedido mínimo:<b> R$ 25,00</b></p>
            </div>
            </div>
            <img id="logo" src={logo} alt="logo"/>
        </div>

    )
}


export default HeaderContent
