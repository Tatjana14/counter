import React from 'react';
import s from './Button.module.css';

type ButtonType = {
    disabled: boolean
    value: string
    callback: () => void
}

const Button: React.FC<ButtonType> = (props) => {
    return (
        <button className={s.btn} onClick={props.callback} disabled={props.disabled}>{props.value}</button>
    );
}

export default Button;