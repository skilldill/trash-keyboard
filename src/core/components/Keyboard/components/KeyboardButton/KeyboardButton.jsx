import React, { useState } from "react";

export const KeyboardButton = (props) => {
    const { onClick, children } = props;
    
    const [touchHelp, setTouchHelp] = useState(null);

    const handleTouchStart = () => {
        setTouchHelp(<span>{children}</span>);
    }

    const hanldeTouchEnd = () => {
        setTouchHelp(null);
    }

    return (
        <button
            className="keyboard-key"
            onClick={onClick}
            onTouchStart={handleTouchStart}
            onTouchEnd={hanldeTouchEnd}
        >
            {touchHelp}
            {children}
        </button>
    )
}