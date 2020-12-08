import React, { useMemo, useState, useEffect } from "react";

import "./style.scss";
import { useTouch } from "../../../../../shared/hooks";

export const Roullete = (props) => {
  const { layout, onClick } = props;
  
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
    setStateTranslateY(84);
  }, [])


  const lengthLayoutLent = useMemo(() => (62 * (layout.length - 1)) - 84, [layout]);

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

  return (
    <div 
      className="roullete" 
      style={dragStyle}
      onTouchStart={handleTouchStart()}
      onTouchMove={handleTouchMove()}
      onTouchEnd={handleTouchEnd(handleDragEnd)}
    >
      {layout.map((keyValue, i) => (
        <div 
          className="roullete-key" 
          key={`${keyValue}-${i}`}
          onClick={() => onClick(keyValue)}
        >
          <span>
            {keyValue}
          </span>
        </div>
      ))}
    </div>
  )
}