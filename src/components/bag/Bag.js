import React, { useState } from "react";
import './bag.css'

import {RiShoppingBagFill} from 'react-icons/ri'
import ModalCarrinho from "../modal/ModalCarrinho";

function Bag(){
    const [modalCarrinho, setModalCarrinho] = useState(false)

    // const handleNoScroll = () => {
    //   const body = document.getElementsByTagName('body')[0]
    //   body.classList.add('noScroll')
    // }

    const openModal = () => {
      setModalCarrinho(true)
      // handleNoScroll()
    }
    return (
      <div>
        <div className="bagStore">
            <div className="itemsBag" onClick={openModal}>
                < RiShoppingBagFill id="iconBag" />
                <div className="textBag">
                    <p className="titleBag">Sacola Vazia</p>
                    <p className="subtitleBag"> Selecione os itens e adicione a sacola</p>
                </div>
                <div className="priceBag">R$ 0,00</div>
            </div>
        </div>
        {modalCarrinho ? < ModalCarrinho onClose={() =>setModalCarrinho(false)} />: null}
      </div>
    )

    }
export default Bag
