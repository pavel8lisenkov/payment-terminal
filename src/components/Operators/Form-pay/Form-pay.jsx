import React, { useState } from "react";
import s from './Form-pay.module.css';
import InputAmount from "./Input-amount/Input-amount";
import InputPhone from "./Input-phone/Input-phone";
import { Button} from "./Button/Button";

const FormPay = ({operator, setModalActvie}) => {
  const [phoneValue, setPhoneValue] = useState('');
  const [amountValue, setAmountValue] = useState('');

  return (
    <form action="" className={s.form__pay}>
      <div className={s.operator__title}>
        <img src={operator.logo} alt="logo" />
        <p>{operator.name}</p>
      </div>
      <InputPhone phoneValue={phoneValue} setPhoneValue={setPhoneValue} />
      <InputAmount amountValue={amountValue} setAmountValue={setAmountValue} />
      <Button phoneValue={phoneValue} setPhoneValue={setPhoneValue} amountValue={amountValue} setAmountValue={setAmountValue} setModalActvie={setModalActvie} />
    </form>
  )
}

export default FormPay;