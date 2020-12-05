import { createContext } from "react";

export const PanelRoutingsContext = createContext({
    activePanel: 'gameArea',
    params: {},
    setActivePanel: (panelName) => {},
    setParams: (params) => {}
})