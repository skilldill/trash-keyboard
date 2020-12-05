import React, { useContext, useEffect } from "react";
import { PanelHeader, Panel, View } from "@vkontakte/vkui"

import { PanelRoutingsProvider, PanelRoutingsContext } from "../core/context";
import { Start, GameArea, PANEL_NAMES } from "../panels";

const Routing = () => {
    const { activePanel } = useContext(PanelRoutingsContext);

    return (
        <View activePanel={activePanel}>
            <Start id={PANEL_NAMES.start} />
            <GameArea id={PANEL_NAMES.gameArea} />
        </View>
    )
}

export const RoutingWithProviders = () => (
    <PanelRoutingsProvider>
        <Routing />
    </PanelRoutingsProvider>
)