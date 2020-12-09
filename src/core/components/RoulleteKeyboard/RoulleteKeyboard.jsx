import React, { useMemo } from "react";
import cn from "classnames";

import "./style.scss";
import { Roullete } from "./components";




export const RoulleteKeyboard = (props) => {
  const { layouts, onChange, value, show } = props;

  // layout = { kyes: [{ value, type: 'char' | 'action', actionType? }, ...], startPos: Int }

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
      {layouts.map((layout, i) => (
        <Roullete 
          key={i} 
          layout={layout.keys} 
          onClick={handleChange} 
          startPos={!!layout.startPos ? layout.startPos : 0} 
        />
      ))}
    </div>
  )
}