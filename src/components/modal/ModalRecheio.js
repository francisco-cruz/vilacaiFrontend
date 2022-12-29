import React, { useState } from "react";
import "./modalRecheio.css";
import imgCopo from "../../assets/images/copo.jpeg";
import { MdArrowBackIosNew } from "react-icons/md";
import { HiPlus } from "react-icons/hi";
import { HiMinusSm } from "react-icons/hi";
import { TbMessage } from "react-icons/tb";

function ModalRecheio(props) {
  let [qtndProduct, setQntdProduct] = useState(0);
  const maxQtdnProduct = 10;
  const minQtdnProduct = 0;

  const product = {
    name: "",
    price: "",
    qndt: "",
  }

  const handleMinusQntdProduct = () => {
    console.log(qtndProduct);
    if (qtndProduct >= minQtdnProduct) {
      return setQntdProduct(qtndProduct--);
    }
    return qtndProduct;
  };

  const handlePlusQntdProduct = () => {
    console.log(qtndProduct);
    if (qtndProduct < maxQtdnProduct) {
      return setQntdProduct(qtndProduct++);
    }
    return qtndProduct;
  };

  const saveRequest = () => {
    console.log("salvou");
    localStorage.setItem('produto', JSON.stringify(product));
  };

  const closeModal = (event) => {
    if (event.target.id === props.id) {
      props.onClose();
    }
  };

  return (
    <div className="bgModalRecheio" id={props.id} onClick={closeModal}>
      <div className="modalRecheio">
        <header id="headerModalRecheio">
          <div id="bgIconClosed" onClick={props.onClose}>
            <MdArrowBackIosNew id="iconClosed" />
          </div>
          <p>Vilaçaí</p>
        </header>

        <div id="mainModalRecheio">
          <div id="content">
            <img src={imgCopo} alt="" />
            <div className="lineModalRecheio"></div>
            <div id="contentText">
              <p id="sectionModal">{props.data.section.name}</p>
              <p id="nameModal">{props.data.name}</p>
              <p id="priceModal">{props.data.price} R$</p>
              <p id="obsModal">Até 8 recheios</p>
              {/* <p id="obsModal">{props.data.name}</p> */}
            </div>
          </div>
          <div id="contentQntdRecheios">
            <div id="itemsQntdRecheio">
              <p id="titleQntd">Adicionais</p>
              <p id="valueQntd">0 de 8</p>
            </div>
          </div>

          <div id="sugestao">
            <div>
              <TbMessage />
              <p>Alguma sugestão?</p>
            </div>
            <textarea placeholder="Ex: Muita Nutella, pouco morango."></textarea>
          </div>
        </div>

        <div id="footerModal">
          <div id="btnQntdModal">
            <HiMinusSm onClick={handleMinusQntdProduct} />
            <p>{qtndProduct}</p>
            <HiPlus onClick={handlePlusQntdProduct} />
          </div>
          <div id="btnAdicionar" onClick={saveRequest}>
            <p>Adicionar R$ 100,00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalRecheio;
