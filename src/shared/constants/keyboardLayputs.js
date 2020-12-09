import { ShiftIcon, BackSpaceIcon } from "../../assets/icons";

const DEFAULT= [
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

export const ALPHABET = [
    {value: 'а', type: 'char'}, {value: 'б', type: 'char'}, {value: 'в', type: 'char'}, {value: 'г', type: 'char'}, 
    {value: 'д', type: 'char'}, {value: 'е', type: 'char'}, {value: 'ё', type: 'char'}, {value: 'ж', type: 'char'}, 
    {value: 'з', type: 'char'}, {value: 'и', type: 'char'}, {value: 'й', type: 'char'}, {value: 'к', type: 'char'}, 
    {value: 'л', type: 'char'}, {value: 'м', type: 'char'}, {value: 'н', type: 'char'}, {value: 'о', type: 'char'},
    {value: 'п', type: 'char'}, {value: 'р', type: 'char'}, {value: 'с', type: 'char'}, {value: 'т', type: 'char'},
    {value: 'у', type: 'char'}, {value: 'ф', type: 'char'}, {value: 'х', type: 'char'}, {value: 'ц', type: 'char'},
    {value: 'ч', type: 'char'}, {value: 'ш', type: 'char'}, {value: 'щ', type: 'char'}, {value: 'ъ', type: 'char'},
    {value: 'ы', type: 'char'}, {value: 'ь', type: 'char'}, {value: 'э', type: 'char'}, {value: 'ю', type: 'char'},
    {value: 'я', type: 'char'}
  ]