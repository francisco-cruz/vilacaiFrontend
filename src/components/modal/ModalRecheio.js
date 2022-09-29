import React from "react";
import './modalRecheio.css'
import {MdArrowBackIosNew} from 'react-icons/md'
import {HiPlus} from 'react-icons/hi'
import {HiMinusSm} from 'react-icons/hi'
import {TbMessage} from 'react-icons/tb'

import imgCopo from '../../assets/images/copo.jpeg'


function ModalRecheio ({ id="modalRecheio", onClose = ()=> {} }) {



  // const handleNoScroll = () => {
  //   const body = document.getElementsByTagName('body')[0]
  //   body.classList.remove('noScroll')
  // }


  const openModal = ( event )=>{
    if( event.target.id === id ){
      // handleNoScroll()
      onClose()

    }
  }

    return (
        <div className="bgModalRecheio" id= {id} onClick={openModal}>
            <div className="modalRecheio">
              <header id="headerModalRecheio">
                <div id="bgIconClosed" onClick={onClose}>
                < MdArrowBackIosNew id="iconClosed" />
                </div>
                <p>Vilaçaí</p>
              </header>

              <div id="mainModalRecheio">
              <div id="content">
                <img src={imgCopo}  alt=""/>
                <div className="lineModalRecheio"></div>
                <div id="contentText">
                  <p id="sectionModal">Açaí</p>
                  <p id="nameModal">Copo 300 ml</p>
                  <p id="priceModal">R$ 12,00</p>
                  <p id="obsModal">Até 8 adicionais</p>
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
                  < TbMessage />
                  <p>Alguma sugestão?</p>
                </div>
                <textarea
                placeholder="Ex: Muita Nutella, pouco morango."
                >
                </textarea>

              </div>

              <div id="sugestao">
                <div>
                  < TbMessage />
                  <p>Alguma sugestão?</p>
                </div>
                <textarea
                placeholder="Ex: Muita Nutella, pouco morango."
                >
                </textarea>

              </div>

              <div id="sugestao">
                <div>
                  < TbMessage />
                  <p>Alguma sugestão?</p>
                </div>
                <textarea
                placeholder="Ex: Muita Nutella, pouco morango."
                >
                </textarea>

              </div>

              <div id="sugestao">
                <div>
                  < TbMessage />
                  <p>Alguma sugestão?</p>
                </div>
                <textarea
                placeholder="Ex: Muita Nutella, pouco morango."
                >
                </textarea>

              </div>
            </div>

              <div id="footerModal">
                <div id="btnQntdModal">
                  < HiMinusSm />
                  <p>0</p>
                  < HiPlus />
                </div>
                <div id="btnAdicionar">
                  <p>Adicionar R$ 100,00</p>
                </div>
              </div>
            </div>
        </div>
    )
}

export default ModalRecheio
