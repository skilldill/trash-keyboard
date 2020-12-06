import React, { useMemo } from "react";
import cn from "classnames";

import "./style.scss";

export const Keyboard = (props) => {
    const { onClick, show, keyboardLayout } = props;

    const classes = useMemo(() => cn({
        'keyboard': true,
        'keyboard-show': show
    }), [show])

    const handleClick = (keyObject) => {
        if (keyObject.type === "char") {
            return onClick(keyObject.value);
        }

        if (keyObject.type === "action") {
            const { actionType } = keyObject;
            
            // Добавить реализацию для действий

            return;
        }
    }

    return (
        <div className={classes}>
            {keyboardLayout.map((row, i) => (
                <div className="keyboard-row" key={`row-${i}`}>
                    {row.map((rowKey, i) => (
                        <button 
                            className="keyboard-key"
                            onClick={() => handleClick(rowKey)}
                            key={`${rowKey.value}-${rowKey.type}-${i}`}
                        >
                            {rowKey.value}
                        </button>
                    ))}
                </div>
            ))}
            <div className="keyboard-row keyboard-row-bottom">
                <div className="keyboard-key keyboard-key-mock"></div>
                <div className="keyboard-key keyboard-key-mock"></div>
                <button 
                    className="keyboard-key"
                    onClick={() => handleClick({ type: "char", value: "," })}
                >,</button>
                <button 
                    className="keyboard-key keyboard-key-space"
                    onClick={() => handleClick({ type: "char", value: " " })}
                ></button>
                <button 
                    className="keyboard-key"
                    onClick={() => handleClick({ type: "char", value: "." })}
                >.</button>
                <div className="keyboard-key keyboard-key-mock"></div>
                <div className="keyboard-key keyboard-key-mock"></div>
            </div>
        </div>
    )
}