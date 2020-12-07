import React, { useMemo } from "react";

import "./style.scss";
import { useTouch } from "../../../../../shared/hooks";

export const Roullete = (props) => {
    const { keys, onClick } = props;

    const {
        stateTransition,
        stateTranslateY,

        handleTouchStart,
        handleTouchMove,
        handleTouchEnd,

        setStateTransition,
        setStateTranslateY,

        addTransitionAnimation
    } = useTouch();


    const dragStyle = useMemo(() => ({
        transform: `translateY(${stateTranslateY}px)`,
        transition : stateTransition ? "all .3s" : "none",
    }), [stateTranslateY, stateTransition])

    return (
        <div className="roullete"
            style={dragStyle}
            onTouchStart={handleTouchStart()}
            onTouchMove={handleTouchMove()}
            onTouchEnd={handleTouchEnd()}
        >
            {keys.map((keyValue, i) => (
            <div 
                className="roullete-key" 
                onClick={() => onClick(keyValue)}
                key={`${keyValue}-${i}`}
            >
                {keyValue}
            </div>
            ))}
        </div>
    )
}