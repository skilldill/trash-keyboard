import React, { useContext } from "react";
import { Panel, Group, SimpleCell, Header, PanelHeader } from "@vkontakte/vkui";

import { PanelRoutingsContext } from "../../core/context";
import { GAME_TYPES } from "../../shared/constants";
import { PANEL_NAMES } from "../";

export const Start = ({ id }) => {
    const { setActivePanel, setParams } = useContext(PanelRoutingsContext);

    const handleChangeKeyboard = (gameType) => {
        setActivePanel(PANEL_NAMES.gameArea);
        setParams({ gameType });
    }

    return (
        <Panel id={id}>
           <PanelHeader>Выбор этапа</PanelHeader>
           <Group>
                <Header>Вид клавиатуры</Header>

                <SimpleCell 
                    onClick={() => handleChangeKeyboard(GAME_TYPES.dinamycRandom)} 
                    expandable
                >Динамическая (по времени)</SimpleCell>

                <SimpleCell 
                    onClick={() => handleChangeKeyboard(GAME_TYPES.initialRandom)} 
                    expandable
                >Динамическая (при инициализации)</SimpleCell>
                
                <SimpleCell 
                    onClick={() => handleChangeKeyboard(GAME_TYPES.roulletKeyboard)} 
                    expandable
                >Рулетка</SimpleCell>

                <SimpleCell 
                    onClick={() => handleChangeKeyboard(GAME_TYPES.default)} 
                    expandable
                >Стандартная</SimpleCell>
           </Group>
        </Panel>
    )
}