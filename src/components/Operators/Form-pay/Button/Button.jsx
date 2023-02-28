import React, { useState } from "react";
import s from './Button.module.css';
import Spinner from "./Spinner";

export const Button = ({ phoneValue, setPhoneValue, amountValue, setAmountValue, setModalActvie }) => {
  const [loading, setLoading] = useState(false);

  const getRandomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const randomPay = (num) => {
    if (num === 1) {
      alert(`Оплата по номеру ${phoneValue} на сумму ${amountValue}₽ не прошла, попробуйте еще раз.`);
    } else if (num === 2) {
      alert(`Оплата по номеру ${phoneValue} на сумму ${amountValue}₽ прошла, поздравляем!`);
      setModalActvie(false);
      setPhoneValue('');
      setAmountValue('');
    }
  }

  const payMoney = (event) => {

    const fetch = (event) => {
      const p = new Promise(function (resolve, reject) {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          resolve();
        }, 2000)
      })

      event.preventDefault();
      p.then(() => {
        setTimeout(() => {
          randomPay(getRandomNum(1, 2));
        }, 20)
      })
    }

    if ((phoneValue[0] === '8' && phoneValue.length === 17 && amountValue.length > 0) || (phoneValue[0] === '+' && phoneValue[1] === '7' && phoneValue.length === 18 && amountValue.length > 0) || (phoneValue[0] === '+' && phoneValue[1] !== '7' && phoneValue.length === 12 && amountValue.length > 0)) {
      fetch(event);
    }
  }

  return (
    <button type="submit" className={s.button} onClick={event => payMoney(event)} disabled={loading}>
      {loading ? <Spinner /> : 'Оплатить'}
    </button>
  )
}