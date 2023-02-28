import React from "react";
import s from './Input-amount.module.css';

const InputAmount = ({amountValue, setAmountValue}) => {

  const getInputNumbersValue = (value) => {
    return value.replace(/\D/g, "");
  }

  const handleAmountInput = event => {
    let input = event.target;
    let inputNumbersValue = getInputNumbersValue(input.value);

    if (inputNumbersValue > 1000) {
      input.value = 1000;
    } else if (inputNumbersValue < 1) {
      input.value = 1;
    }

    if (!inputNumbersValue) {
      input.value = '';
    }

    setAmountValue(input.value);
  }

  return (
    <div class={s.wrapper}>
      <div class={s.wrapper__input}>
        <label htmlFor="amount">Сумма в рублях</label>
        <input id="amount" type="number" placeholder="Максимальная сумма 1000 ₽" required
        value={amountValue}
          onInput={handleAmountInput}
        />
      </div>
    </div>
  )
}

export default InputAmount;