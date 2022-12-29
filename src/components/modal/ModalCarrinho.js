import React, { useState } from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import { IoMdTrash } from "react-icons/io";

import "./modalCarrinho.css";
import ModalInfo from "./ModalInfo";

function ModalCarrinho({ id = "modalCarrinho", onClose = () => {} }) {
  const [modalInfo, setModalInfo] = useState(false);

  const openModal = () => {
    setModalInfo(true);
    // handleNoScroll()
  };

  return (
    <div className="bgModalCarrinho" id={id} onClick={openModal}>
      <div className="modalCarrinho">
        <header id="headerModalCarrinho">
          <div id="bgIconClosed" onClick={onClose}>
            <MdArrowBackIosNew id="iconClosed" />
          </div>
          <p>Carrinho</p>
        </header>

        <div id="contentCarrinho">
          <div className="pedido">
            <div className="sectionPedido">
              <p>Açaí</p>
            </div>
            <div className="contentText">
              <p>1X</p> <p>Copo 300ml</p> <p>12,00</p> <IoMdTrash />
            </div>
          </div>

          <button id="btnFazerPedido" onClick={() => setModalInfo(true)}>
            Continue R$ 27,00
          </button>
          {modalInfo ? <ModalInfo onClose={() => setModalInfo(false)} /> : null}
        </div>
      </div>
    </div>
  );
}

export default ModalCarrinho;
