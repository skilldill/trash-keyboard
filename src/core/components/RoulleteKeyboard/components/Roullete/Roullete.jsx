import React, { useMemo, useState, useEffect } from "react";

import "./style.scss";
import { useTouch } from "../../../../../shared/hooks";
import { CHAR_HEIGHT, INITIAL_TRANSLATE } from "./contants";

export const Roullete = (props) => {
  const { layout, onClick, startPos } = props;
  
  const {
    stateTranslateY,
    stateTransition,

    setStateTranslateY,
    addTransitionAnimation,

    handleTouchStart,
    handleTouchMove,
    handleTouchEnd
  } = useTouch({ startY: INITIAL_TRANSLATE });

  const [oldY, setOldY] = useState(INITIAL_TRANSLATE);

  useEffect(() => {
    if (!!startPos) {
      setStateTranslateY(INITIAL_TRANSLATE - (startPos * CHAR_HEIGHT));
    } else {
      setStateTranslateY(INITIAL_TRANSLATE);
    }
  }, [])


  const lengthLayoutLent = useMemo(() => (CHAR_HEIGHT * (layout.length - 1)) - INITIAL_TRANSLATE, [layout]);

  const handleDragEnd = () => {
    if (stateTranslateY > -lengthLayoutLent && stateTranslateY < INITIAL_TRANSLATE) {
      const diff = (stateTranslateY - INITIAL_TRANSLATE) % CHAR_HEIGHT;

      if (oldY > stateTranslateY) {
        setOldY(stateTranslateY - (diff + INITIAL_TRANSLATE));
        addTransitionAnimation();
        return setStateTranslateY(stateTranslateY - (diff + CHAR_HEIGHT));
      } 

      if (oldY < stateTranslateY) {
        setOldY(stateTranslateY - diff);
        addTransitionAnimation();
        return setStateTranslateY(stateTranslateY - diff);
      }
    }

    if (stateTranslateY > INITIAL_TRANSLATE) {
      setOldY(INITIAL_TRANSLATE);
      addTransitionAnimation();
      return setStateTranslateY(INITIAL_TRANSLATE);
    }

    if (stateTranslateY < -lengthLayoutLent) {
      setOldY(-lengthLayoutLent);
      addTransitionAnimation();
      return setStateTranslateY(-lengthLayoutLent);
    }
  }

  const dragStyle = useMemo(() => ({
    transform: `translateY(${stateTranslateY}px)`,
    transition : stateTransition ? "all .3s" : "none"
  }), [stateTranslateY])

  const handleClick = (keyObj, keyId) => {
    const currentFocusId = -(stateTranslateY - INITIAL_TRANSLATE) / CHAR_HEIGHT;

    if (keyId === currentFocusId) {
      onClick(keyObj);
    }
  }

  return (
    <div 
      className="roullete" 
      style={dragStyle}
      onTouchStart={handleTouchStart()}
      onTouchMove={handleTouchMove()}
      onTouchEnd={handleTouchEnd(handleDragEnd)}
    >
      {layout.map((keyObj, i) => (
        <div 
          className="roullete-key" 
          key={`${keyObj.value}-${i}`}
          onClick={() => handleClick(keyObj, i)}
        >
          <span>
            {keyObj.value}
          </span>
        </div>
      ))}
    </div>
  )
}