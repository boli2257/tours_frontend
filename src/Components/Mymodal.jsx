import React from "react";
import { Modal, ModalBody } from 'reactstrap'

export const Mymodal = ({modal, setModal, selImg, selPrice, selInfo}) => {

    const toggle = ()=>setModal(!modal)


  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalBody>
            <img id="modalkep" className="d-flex" style={{maxHeight:"100%", maxWidth:"100%"}} src={selImg} alt="" />
            <div className="mt-4">{selInfo}</div>
            <div className="mt-4">{selPrice} $</div>
        </ModalBody>

      </Modal>
    </div>
  )
}
