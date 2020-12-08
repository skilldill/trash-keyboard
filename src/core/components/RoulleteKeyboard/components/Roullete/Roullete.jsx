import React, { useMemo, useState, useEffect } from "react";
import bridge from "@vkontakte/vk-bridge";

import "./style.scss";
import { useTouch } from "../../../../../shared/hooks";

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
  } = useTouch({ startY: 84 });

  const [oldY, setOldY] = useState(84);

  useEffect(() => {
    if (!!startPos) {
      setStateTranslateY(84 - (startPos * 62));
    } else {
      setStateTranslateY(84);
    }
  }, [])


  const lengthLayoutLent = useMemo(() => (62 * (layout.length - 1)) - 84, [layout]);

  const handleDragMove = () => {
    bridge.send("VKWebAppTapticSelectionChanged", {});
  }

  const handleDragEnd = () => {
    if (stateTranslateY > -lengthLayoutLent && stateTranslateY < 84) {
      const diff = (stateTranslateY - 84) % 62;

      if (oldY > stateTranslateY) {
        setOldY(stateTranslateY - (diff + 84));
        addTransitionAnimation();
        return setStateTranslateY(stateTranslateY - (diff + 62));
      } 

      if (oldY < stateTranslateY) {
        setOldY(stateTranslateY - diff);
        addTransitionAnimation();
        return setStateTranslateY(stateTranslateY - diff);
      }
    }

    if (stateTranslateY > 84) {
      setOldY(84);
      addTransitionAnimation();
      return setStateTranslateY(84);
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
    const currentFocusId = -(stateTranslateY - 84) / 62;

    if (keyId === currentFocusId) {
      onClick(keyObj);
    }
  }

  return (
    <div 
      className="roullete" 
      style={dragStyle}
      onTouchStart={handleTouchStart()}
      onTouchMove={handleTouchMove(handleDragMove)}
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