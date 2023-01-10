import React, { useState } from "react";
import ModalRecheio from "../modal/ModalRecheio";
import "./produto.css";

function Produto({id, name, price, img, allProducts}) {
  const [modalVisible, setModalVisible] = useState(false);
  
  function openModal() {
    setModalVisible(true);
  }

  return (
    <>
      <div className="produto" onClick={openModal}>
        <div className="img_produto">
          <img
            className="img_produto"
            src={img}
            alt="Imagem produto"
          />
        </div>
        <div className="line_produto"></div>
        <div className="container_produto">
          <p className="name_produto">{name}</p>
          {/* <p className="obs_produto">{product.data.obs}</p> */}
          <p className="price_produto">R$ {price},00</p>
        </div>
      </div>
      {modalVisible ? (
        <ModalRecheio id = "modalRecheio" allProducts={allProducts} name={name} price={price} img={img} onClose={() => setModalVisible(false)} />
      ) : null}
    </>
  );
}

export default Produto;
