import React, { useState } from "react";
import Operator from "./Operator/Operator";
import s from './Operators.module.css';
import Modal from "./Modal/Modal";
import mtsLogo from '../../assets/icons/mts.png'
import beelineLogo from '../../assets/icons/beeline.png'
import tele2Logo from '../../assets/icons/tele2.png'
import megafonLogo from '../../assets/icons/megafon.png'
import FormPay from "./Form-pay/Form-pay";

const operatorsList = [
  {
    name: 'МТС',
    logo: `${mtsLogo}`,
  },
  {
    name: 'Билайн',
    logo: `${beelineLogo}`,
  },
  {
    name: 'Tele2',
    logo: `${tele2Logo}`,
  },
  {
    name: 'МегаФон',
    logo: `${megafonLogo}`,
  }
]

function Operators() {
  const [modalActive, setModalActvie] = useState(false);
  const [operatorSelect, setOperatorSelect] = useState('');
  const operatorsItems = operatorsList.map(operatorItem => {
    return (
      <div onClick={() => {
        setModalActvie(true);
        setOperatorSelect(operatorItem);
      }}>
        <Operator name={operatorItem.name} logo={operatorItem.logo} />
      </div>
    )
  })

  return (
    <>
      <ul className={s.list}>
        {operatorsItems}
      </ul>
      <Modal isOpened={modalActive} onModalClose={() => setModalActvie(false)}>
        <FormPay operator={operatorSelect} setModalActvie={setModalActvie} />
      </Modal>
    </>
  )
}

export default Operators;