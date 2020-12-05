import React, { useState, useEffect } from "react";

import { PanelRoutingsContext } from "./PanelRoutings.context";

export const PanelRoutingsProvider = ({ children }) => {
    const [activePanel, setActivePanel] = useState('start');
    const [params, setParams] = useState({});

    return (
        <PanelRoutingsContext.Provider value={{ activePanel, setActivePanel, params, setParams }}>
            {children}
        </PanelRoutingsContext.Provider>
    )
}