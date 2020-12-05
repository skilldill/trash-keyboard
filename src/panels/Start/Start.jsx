import React, { useContext } from "react";
import { Panel, Group, SimpleCell, Header, PanelHeader } from "@vkontakte/vkui";

import { PanelRoutingsContext } from "../../core/context";
import { PANEL_NAMES } from "../";

export const Start = ({ id }) => {
    const { setActivePanel, setParams } = useContext(PanelRoutingsContext);

    const handleChangeKeyboard = () => {
        setActivePanel(PANEL_NAMES.gameArea);
    }

    return (
        <Panel id={id}>
           <PanelHeader>Выбор этапа</PanelHeader>
           <Group>
               <Header>Вид клавиатуры</Header>
               <SimpleCell onClick={handleChangeKeyboard} expandable>Динамическая (по времени)</SimpleCell>
               <SimpleCell onClick={handleChangeKeyboard} expandable>Динамическая (при инициализации)</SimpleCell>
               <SimpleCell onClick={handleChangeKeyboard} expandable>Рулетка</SimpleCell>
               <SimpleCell onClick={handleChangeKeyboard} expandable>Стандартная</SimpleCell>
           </Group>
        </Panel>
    )
}