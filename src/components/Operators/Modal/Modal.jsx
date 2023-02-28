import React from "react";
import ButtonClose from "./Button-close/Button-close";
import s from './Modal.module.css';

const Modal = (props) => {
  return (
    <div className={`${s.modal__wrapper} ${props.isOpened ? s.open : s.close}`}>
      <div className={s.modal__body}>
        <div className={s.modal__close} onClick={props.onModalClose}>
          <ButtonClose />
        </div>
        <h2>{props.title}</h2>
        {props.children}
      </div>
    </div>
  )
}

export default Modal;