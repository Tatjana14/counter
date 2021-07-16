import React from 'react';
import s from './Display.module.css';

type DisplayType = {
    value: number
}
const Display: React.FC<DisplayType> = (props) => {
    const counterClass = props.value === 5 ? s.counterStop : s.counter
    return (
        <div className={s.display}>
            <span className={counterClass}>{props.value}</span>
        </div>
    );
}

export default Display;