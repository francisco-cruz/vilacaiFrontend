import React, { useState } from "react";
import ModalRecheio from "../modal/ModalRecheio";
import "./produto.css";

function Produto(product) {
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
            src={
              "https://st.depositphotos.com/1000459/2436/i/450/depositphotos_24366251-stock-photo-soccer-ball.jpg"
            }
            alt="Imagem produto"
          />
        </div>
        <div className="line_produto"></div>
        <div className="container_produto">
          <p className="name_produto">{product.data.name}</p>
          {/* <p className="obs_produto">{product.data.obs}</p> */}
          <p className="price_produto">R$ {product.data.price},00</p>
        </div>
      </div>
      {modalVisible ? (
        <ModalRecheio id = "modalRecheio" allProducts={product.allProducts} data={product.data} onClose={() => setModalVisible(false)} />
      ) : null}
    </>
  );
}

export default Produto;
