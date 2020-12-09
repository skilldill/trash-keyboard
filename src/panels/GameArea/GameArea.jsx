import React, { useContext, useEffect, useMemo, useState } from "react";
import { Panel, PanelHeader, PanelHeaderBack, Div, Group, Header } from "@vkontakte/vkui";

import { PanelRoutingsContext } from "../../core/context";
import { Keyboard, RoulleteKeyboard } from "../../core/components";
import { generateLayout } from "../../core/LayoutsGenerator";
import { PANEL_NAMES } from "../";
import { GAME_TYPES, MAX_LAYOUTS } from "../../shared/constants";
import { ALPHABET } from "../../shared/constants/keyboardLayputs";
import { getRandomInt, timerSelfDestroy } from "../../shared/utils";
import { BackSpaceIcon } from "../../assets/icons";

export const GameArea = ({ id }) => {
    const { setActivePanel, params } = useContext(PanelRoutingsContext);
    const { gameType } = params;

    const [showKeyboard, setShowKeyboard] = useState(true);
    const [typedText, setTypedText] = useState('');
    const [typeLayoutId, setTypeLayoutId] = useState(0);

    // for fix timing
    const [gameTiming, setGameTimnig] = useState(0);
    
    const [result, setResult] = useState('');

    const handleBack = () => {
        setActivePanel(PANEL_NAMES.start);
    }

    useEffect(() => {
        const layoutId = getRandomInt(1, MAX_LAYOUTS);
        setTypeLayoutId(layoutId);
    }, [])

    useEffect(() => {
        if (gameType === GAME_TYPES.dinamycRandom) {
            timerSelfDestroy(1000, () => {
                if (gameTiming % 2 === 0) {
                    setTypeLayoutId(getRandomInt(1, MAX_LAYOUTS));
                }
                setGameTimnig(gameTiming + 1);
            });
        }

        if (gameType === GAME_TYPES.initialRandom) {
            if (typeLayoutId === 0) {
                setTypeLayoutId(getRandomInt(1, MAX_LAYOUTS));
            }

            timerSelfDestroy(1000, () => {
                setGameTimnig(gameTiming + 1);
            });
        }

        if (gameType === GAME_TYPES.roulletKeyboard) {
            timerSelfDestroy(1000, () => {
                setGameTimnig(gameTiming + 1);
            });
        }
       
    }, [gameTiming])

    useEffect(() => {
        if (typedText === "привет" && result.length === 0) {
            setResult(`Вы написали "привет" за ${gameTiming} секунд`)
            setShowKeyboard(false);
        }
    }, [typedText, gameTiming])

    const layout = useMemo(() => generateLayout(typeLayoutId), [typeLayoutId]);

    const resultGroup = useMemo(() => !!result.length && (
        <Group header={<Header mode="secondary">Результат</Header>}>
            <Div>{result}</Div>
        </Group>
    ), [result.length])
    
    const keyboard = useMemo(() => {
        if (gameType === GAME_TYPES.roulletKeyboard) {
            return (
                <RoulleteKeyboard 
                    show={showKeyboard} 
                    onChange={setTypedText} 
                    value={typedText}
                    layouts={[
                        { keys: [{value: '_', type: 'char'}] },
                        { keys: ALPHABET, startPos: getRandomInt(0, ALPHABET.length - 1) },
                        { keys: ALPHABET, startPos: getRandomInt(0, ALPHABET.length - 1) },
                        { keys: ALPHABET, startPos: getRandomInt(0, ALPHABET.length - 1) },
                        { keys: [{ type: "action", actionType: "backSpace", value: BackSpaceIcon }] },
                    ]}
                />
            )
        }

        return (
            <Keyboard 
                onChange={setTypedText} 
                value={typedText}
                keyboardLayout={layout}
                show={showKeyboard}
            />
        )
    }, [setTypedText, typedText, layout, showKeyboard, gameType])

    return (
        <Panel id={id}>
            <PanelHeader
                left={<PanelHeaderBack onClick={handleBack} />}
            >Игра</PanelHeader>
            
            <Group header={<Header mode="secondary">Напишите "привет"</Header>}>
                <Div>{typedText}</Div>
            </Group>

            {resultGroup}
            
            {keyboard}
        </Panel>
    )
}