import { useState, useCallback } from "react";

export const useTouch = (config) => {
  let initialConfig = { startX: 0, startY: 0, translateX: 0, translateY: 0, transition: false };
  if (!!config) initialConfig = { ...initialConfig, ...config };
  const { startX, startY, translateX, translateY, transition } = initialConfig;

  const [stateStartX, setStateStartX] = useState(startX);
  const [stateStartY, setStateStartY] = useState(startY);
  const [stateTranslateX, setStateTranslateX] = useState(translateX);
  const [stateTranslateY, setStateTranslateY] = useState(translateY);
  const [stateTransition, setStateTransition] = useState(transition);

  const addTransitionAnimation = useCallback((cb, transX = translateX, transY = translateY, delay = 400) => {
    const promiseAnimation = new Promise((resolve) => {
      setStateTransition(true);
        setStateTranslateY(transY);
        setStateTranslateX(transX);

        !!cb && cb();

        const timeout = setTimeout(() => {
            resolve(timeout);
        }, delay);
    })

    promiseAnimation
        .then((timeout) => {
            clearTimeout(timeout);
            setStateTransition(false);
        })
  }, [])

  const handleTouchStart = useCallback((cb) => (event) => {
    const { touches } = event;
    const { clientX, clientY } = touches[0];

    !!cb && cb();

    setStateStartX(clientX);
    setStateStartY(clientY);
  }, [setStateStartX, setStateStartY])

  const handleTouchMove = useCallback((cb) => (event) => {
    const { touches } = event;
    const { clientX, clientY } = touches[0];

    const diffX = clientX - stateStartX;
    const diffY = clientY - stateStartY;

    setStateTranslateX(stateTranslateX + diffX);
    setStateTranslateY(stateTranslateY + diffY);

    !!cb && cb();
  }, [stateStartX, stateStartY, setStateTranslateX, setStateTranslateY])

  const handleTouchEnd = (cb) => (event) => {
    !!cb && cb();
  }

  return {
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    addTransitionAnimation,
    
    setStateTranslateX,
    setStateTranslateY,
    setStateTransition,

    stateStartX,
    stateStartY,
    stateTranslateX,
    stateTranslateY,
    stateTransition
  }
}