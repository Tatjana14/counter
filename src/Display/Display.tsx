import React from 'react';
import s from './Display.module.css';

type DisplayType = {
    value: number
    text: string
    maxValue: number
}
const Display: React.FC<DisplayType> = (props) => {
    const counterClass = props.value === props.maxValue ? s.counterStop : s.counter
    return (
        <div className={s.display}>
            {props.text !== "" && <span >{props.text}</span>}
            {props.text === ""  && <span className={counterClass}>{props.value}</span>}
        </div>
    );
}

export default Display;