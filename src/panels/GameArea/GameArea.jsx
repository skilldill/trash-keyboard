import React, { useContext, useState } from "react";
import { Panel, PanelHeader, PanelHeaderBack, Div } from "@vkontakte/vkui";

import { PanelRoutingsContext } from "../../core/context";
import { Keyboard } from "../../core/components";
import { PANEL_NAMES } from "../";

import { ShiftIcon, BackSpaceIcon } from "../../assets/icons";

const TEST_LAYOUT = [
    [
        { type: "char", value: "й" }, 
        { type: "char", value: "ц" }, 
        { type: "char", value: "у" }, 
        { type: "char", value: "к" },
        { type: "char", value: "е" }, 
        { type: "char", value: "н" },
        { type: "char", value: "г" },
        { type: "char", value: "ш" }, 
        { type: "char", value: "щ" }, 
        { type: "char", value: "з" }, 
        { type: "char", value: "х" }
    ],
    [
        { type: "char", value: "ф" }, 
        { type: "char", value: "ы" }, 
        { type: "char", value: "в" }, 
        { type: "char", value: "а" },
        { type: "char", value: "п" }, 
        { type: "char", value: "р" },
        { type: "char", value: "о" },
        { type: "char", value: "л" }, 
        { type: "char", value: "д" }, 
        { type: "char", value: "ж" }, 
        { type: "char", value: "э" }
    ],
    [
        { type: "action", actionType: "shift", value: ShiftIcon }, 
        { type: "char", value: "я" }, 
        { type: "char", value: "ч" }, 
        { type: "char", value: "с" },
        { type: "char", value: "м" }, 
        { type: "char", value: "и" },
        { type: "char", value: "т" },
        { type: "char", value: "ь" }, 
        { type: "char", value: "б" }, 
        { type: "char", value: "ю" }, 
        { type: "action", actionType: "backSpace", value: BackSpaceIcon }
    ]
]

export const GameArea = ({ id }) => {
    const { setActivePanel } = useContext(PanelRoutingsContext);

    const [typedText, setTypedText] = useState('');

    const handleBack = () => {
        setActivePanel(PANEL_NAMES.start);
    }

    return (
        <Panel id={id}>
            <PanelHeader
                left={<PanelHeaderBack onClick={handleBack} />}
            >Игра</PanelHeader>
            <Div>
                <h1>{typedText}</h1>
            </Div>
            <Keyboard 
                onChange={setTypedText} 
                value={typedText}
                keyboardLayout={TEST_LAYOUT}
            />
        </Panel>
    )
}