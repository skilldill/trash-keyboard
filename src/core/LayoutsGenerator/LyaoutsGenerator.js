import React from "react";

import { ShiftIcon, BackSpaceIcon } from "../../assets/icons";

export const generateLayout = (layoutTypeId) => {
    const DEFAULT_LAYOUT = [
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

    if (layoutTypeId === 0) {
        return DEFAULT_LAYOUT;
    }

    if (layoutTypeId === 1) {
        return DEFAULT_LAYOUT.reverse();
    } 

    if (layoutTypeId === 2) {
        return DEFAULT_LAYOUT.map((row) => row.reverse()).reverse();
    }

    if (layoutTypeId === 3) {
        const firstRow = DEFAULT_LAYOUT[0];
        const secondRow = DEFAULT_LAYOUT[1];
        const thridRow = DEFAULT_LAYOUT[2];

        return [secondRow, thridRow, firstRow];
    }

    if (layoutTypeId === 4) {
        const firstRow = DEFAULT_LAYOUT[0];
        const secondRow = DEFAULT_LAYOUT[1];
        const thridRow = DEFAULT_LAYOUT[2];

        return [secondRow.reverse(), thridRow, firstRow.reverse()];
    }

    if (layoutTypeId === 5) {
        const firstRow = DEFAULT_LAYOUT[0];
        const secondRow = DEFAULT_LAYOUT[1];
        const thridRow = DEFAULT_LAYOUT[2];

        return [
            [...firstRow.splice(0, 6), ...thridRow.splice(6, thridRow.length)],
            [...thridRow, ...firstRow],
            secondRow
        ];
    }
}
