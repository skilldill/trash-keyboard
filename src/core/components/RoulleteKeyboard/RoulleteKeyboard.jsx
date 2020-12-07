import React from "react";

import "./style.scss";
import { Roullete } from "./components";

const ALPHABET = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н']

export const RoulleteKeyboard = (props) => {
  const { onChange, value, show } = props;

  return (
    <div className="roullete-keyboard">
      <div className="line line-top"></div>
      <div className="line line-bottom"></div>
      <Roullete keys={ALPHABET} />
    </div>
  )
}