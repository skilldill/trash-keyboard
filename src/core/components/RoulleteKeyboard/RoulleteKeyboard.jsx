import React, { useMemo } from "react";
import cn from "classnames";

import "./style.scss";
import { Roullete } from "./components";
import { BackSpaceIcon } from "../../../assets/icons";
import { getRandomInt } from "../../../shared/utils";

const ALPHABET = [
  {value: 'а', type: 'char'}, {value: 'б', type: 'char'}, {value: 'в', type: 'char'}, {value: 'г', type: 'char'}, 
  {value: 'д', type: 'char'}, {value: 'е', type: 'char'}, {value: 'ё', type: 'char'}, {value: 'ж', type: 'char'}, 
  {value: 'з', type: 'char'}, {value: 'и', type: 'char'}, {value: 'й', type: 'char'}, {value: 'к', type: 'char'}, 
  {value: 'л', type: 'char'}, {value: 'м', type: 'char'}, {value: 'н', type: 'char'}, {value: 'о', type: 'char'},
  {value: 'п', type: 'char'}, {value: 'р', type: 'char'}, {value: 'с', type: 'char'}, {value: 'т', type: 'char'},
  {value: 'у', type: 'char'}, {value: 'ф', type: 'char'}, {value: 'х', type: 'char'}, {value: 'ц', type: 'char'},
  {value: 'ч', type: 'char'}, {value: 'ш', type: 'char'}, {value: 'щ', type: 'char'}, {value: 'ъ', type: 'char'},
  {value: 'ы', type: 'char'}, {value: 'ь', type: 'char'}, {value: 'э', type: 'char'}, {value: 'ю', type: 'char'},
  {value: 'я', type: 'char'}
]

export const RoulleteKeyboard = (props) => {
  const { onChange, value, show } = props;

  const handleChange = (keyObj) => {
    if (keyObj.type === 'char') {
      return onChange(value + keyObj.value.replace('_', ' '));
    }

    if (keyObj.type === "action") {
      const { actionType } = keyObj;
      
      // Добавить реализацию для действий
      switch(actionType) {
          case 'backSpace':
              const updatedValue = value.slice(0, value.length - 1);
              onChange(updatedValue);
              break;
          
          case 'shift':
              break;
      }

      return;
    }
  }

  const classes = useMemo(() => cn({
    'roullete-keyboard': true,
    'roullete-keyboard-show': show
  }), [show])

  return (
    <div className={classes}>
      <div className="line line-top"></div>
      <div className="line line-bottom"></div>
      <Roullete layout={[{value: '_', type: 'char'}]} onClick={handleChange} />
      <Roullete layout={ALPHABET} onClick={handleChange} startPos={getRandomInt(0, ALPHABET.length - 1)} />
      <Roullete layout={ALPHABET} onClick={handleChange} startPos={getRandomInt(0, ALPHABET.length - 1)} />
      <Roullete layout={ALPHABET} onClick={handleChange} startPos={getRandomInt(0, ALPHABET.length - 1)} />
      <Roullete layout={[{ type: "action", actionType: "backSpace", value: BackSpaceIcon }]} onClick={handleChange} />
    </div>
  )
}