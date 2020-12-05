import React, { useContext } from "react";
import { Panel, PanelHeader, PanelHeaderBack } from "@vkontakte/vkui";

import { PanelRoutingsContext } from "../../core/context";
import { PANEL_NAMES } from "../";

export const GameArea = ({ id }) => {
    const { setActivePanel } = useContext(PanelRoutingsContext);

    const handleBack = () => {
        setActivePanel(PANEL_NAMES.start);
    }

    return (
        <Panel id={id}>
            <PanelHeader
                left={<PanelHeaderBack onClick={handleBack} />}
            >Игра</PanelHeader>
        </Panel>
    )
}