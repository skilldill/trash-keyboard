import React, { useMemo, useEffect } from "react";

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

    useEffect(() => { setStateTranslateY(39) }, [])

    const handleDragEnd = () => {
        if (stateTranslateY > 90) {
            setStateTranslateY(90);
            return;
        }
        addTransitionAnimation();
        getCurrentPos();
    }

    const getCurrentPos = () => {
        const keyHeight = 52;
        const currentPos = stateTranslateY - 90;

        const result = currentPos % keyHeight;

        if (Math.abs(result) > 26) {
            setStateTranslateY(stateTranslateY - result);
        } else {
            setStateTranslateY(stateTranslateY - (result + 52));
        }
    }

    const dragStyle = useMemo(() => ({
        transform: `translateY(${stateTranslateY > 90 ? 90 : stateTranslateY}px)`,
        transition : stateTransition ? "all .3s" : "none",
    }), [stateTranslateY, stateTransition])

    return (
        <div className="roullete"
            style={dragStyle}
            onTouchStart={handleTouchStart()}
            onTouchMove={handleTouchMove(() => console.log(stateTranslateY))}
            onTouchEnd={handleTouchEnd(handleDragEnd)}
        >
            {keys.map((keyValue, i) => (
            <div 
                className="roullete-key" 
                onClick={(event) => {event.stopPropagation(); onClick(keyValue)}}
                key={`${keyValue}-${i}`}
            >
                {keyValue}
            </div>
            ))}
        </div>
    )
}