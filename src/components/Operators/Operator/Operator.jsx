import React from "react";
import { NavLink } from "react-router-dom";
import s from './Operator.module.css';

function Operator(props) {
  return (
    <li className={s.item}>
      <img src={props.logo} alt="logo" className={s.operatorImage} />
      {props.name}
    </li>
  )
}

export default Operator;