import React from "react"

import './modalMaisInfo.css'
import { CgClose } from 'react-icons/cg'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { BiTime} from 'react-icons/bi'

const ModalMaisInfo = ( { id="modal", onClose = () => {} } ) => {

  const handleNoScroll = () => {
    const body = document.getElementsByTagName('body')[0]
      body.classList.remove('noScroll')
  }


    const openModal = ( event )=>{
      if( event.target.id === id ){
          handleNoScroll()
          onClose()

        }

      }

  return(

  <div className="bgModalStore" id={ id } onClick={openModal}>
    <div className="modalStore">
      <div className="infoModal">
        <div className="infoOperation">
          <BiTime className="iconModalInfo" />
          <div className="timeOperation">
            <p className="titleModalStore">Horário de funcionamento:</p>
            <p className="textInfoModal">Quarta à Segunda: 18h às 23h.</p>
            <p className="textInfoModal">Terça: Fechado.</p>
            </div>
        </div>

                 <div className="infoAdress">
                    <HiOutlineLocationMarker className="iconModalInfo" />
                   <div className="adressStore">
                     <p className="titleModalStore">Endereço:</p>
                     <p className="textInfoModal">RUA NEWMAN QUEIROZ, 20.</p>
                     <p className="textInfoModal">Vila Santa Izabel - Jucurutu.</p>
                   </div>
                </div>
            </div>
            <CgClose className="iconModalInfo" id="closedModal" onClick={onClose} />
            </div>
        </div>

    )
}

export default ModalMaisInfo

