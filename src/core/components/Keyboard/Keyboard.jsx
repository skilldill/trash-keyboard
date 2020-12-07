import React, { useMemo } from "react";
import cn from "classnames";

import "./style.scss";
import { KeyboardButton } from "./components";

export const Keyboard = (props) => {
    const { onChange, value, show, keyboardLayout } = props;

    const classes = useMemo(() => cn({
        'keyboard': true,
        'keyboard-show': show
    }), [show])

    const handleClick = (keyObject) => {
        if (keyObject.type === "char") {
            return onChange(value + keyObject.value);
        }

        if (keyObject.type === "action") {
            const { actionType } = keyObject;
            
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

    return (
        <div className={classes}>
            {keyboardLayout.map((row, i) => (
                <div className="keyboard-row" key={`row-${i}`}>
                    {row.map((rowKey, i) => (
                        <KeyboardButton
                            onClick={() => handleClick(rowKey)}
                            key={`${rowKey.value}-${rowKey.type}-${i}`}
                        >
                            {rowKey.value}
                        </KeyboardButton>
                    ))}
                </div>
            ))}
            <div className="keyboard-row keyboard-row-bottom">
                <div className="keyboard-key keyboard-key-mock"></div>
                <div className="keyboard-key keyboard-key-mock"></div>
                <KeyboardButton onClick={() => handleClick({ type: "char", value: "," })}>,</KeyboardButton>
                <button 
                    className="keyboard-key keyboard-key-space"
                    onClick={() => handleClick({ type: "char", value: " " })}
                ></button>
                <KeyboardButton onClick={() => handleClick({ type: "char", value: "." })}>.</KeyboardButton>
                <div className="keyboard-key keyboard-key-mock"></div>
                <div className="keyboard-key keyboard-key-mock"></div>
            </div>
        </div>
    )
}