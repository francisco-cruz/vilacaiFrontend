import React from "react";
import "./modalInfo.css";

import { MdArrowBackIosNew } from "react-icons/md";

function ModalInfo({ id = "modalInfo", onClose = () => {} }) {
  const handleOPenModalInfo = (event) => {
    if (event.target.id === id) {
      onClose();
    }
  };

  return (
    <div className="bgModalInfo" id={id} onClick={handleOPenModalInfo}>
      <div className="modalInfo">
        <header id="headerModalInfo">
          <div id="bgIconClosed" onClick={onClose}>
            <MdArrowBackIosNew id="iconClosed" />
          </div>
          <p>Informações</p>
        </header>

        <div id="contentInfo">
          <input type="text" placeholder="Seu nome"></input>
          <input type="text" placeholder="Endereço completo"></input>

          <select>
            <option>Forma de pagamento</option>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão">Cartão</option>
            <option value="Pix">Pix</option>
          </select>

          <div className="divTroco">
            <div className="troco">
              <label>Precisa de troco?</label>
              <input type="checkbox" id="checkbox" />
            </div>
            <input
              type="number"
              min="0.00"
              max="10000.00"
              step="1.0"
              placeholder="0,00"
            />
          </div>

          <button id="btnEnviarPedido">Enviar pedido</button>
        </div>
      </div>
    </div>
  );
}

export default ModalInfo;
