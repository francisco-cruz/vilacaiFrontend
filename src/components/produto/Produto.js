import React, {useState} from "react";
import ModalRecheio from "../modal/ModalRecheio";
import './produto.css'

function Produto({data}) {
  const [ modalVisible, setModalVisible ] = useState(false)

  // const handleNoScroll = () => {
  //   const body = document.getElementsByTagName('body')[0]
  //   body.classList.add('noScroll')
  // }

  function openModal() {
     setModalVisible(true)
    //  handleNoScroll()
   }


   return(
    <>
     <div className="produto" onClick={openModal}>
      <div className="img_produto">
      <img className="img_produto" src={'https://st.depositphotos.com/1000459/2436/i/450/depositphotos_24366251-stock-photo-soccer-ball.jpg'} alt="Imagem produto"/>
      </div>
      <div className="line_produto"></div>
      <div className="container_produto">
      <p className="name_produto">{data.name}</p>
      <p className="obs_produto">{data.obs}</p>
      <p className="price_produto">R${" "}{data.price},00</p>
      </div>
      </div>
      { modalVisible ? <ModalRecheio onClose={() => setModalVisible(false)} />: null}
    </>

)
}

export default Produto
