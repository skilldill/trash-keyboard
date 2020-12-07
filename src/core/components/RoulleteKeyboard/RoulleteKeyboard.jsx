import React from "react";

import "./style.scss";

const ALPHABET = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н']

export const RoulleteKeyboard = (props) => {
  const { onChange, value, show } = props;

  return (
    <div className="roullete-keyboard">
      <div className="roullete">
        {ALPHABET.map((alphabetKey, i) => (
          <div className="roullete-key" key={`${alphabetKey}-${i}`}>
            {alphabetKey}
          </div>
        ))}
      </div>
    </div>
  )
}