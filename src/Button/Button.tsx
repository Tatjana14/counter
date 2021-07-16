import React from 'react';
import s from './Button.module.css';

type ButtonType = {
    disabled: boolean
    value: string
    onClick: () => void
}

const Button: React.FC<ButtonType> = (props) => {
    return (
        <button className={s.btn} onClick={props.onClick} disabled={props.disabled}>{props.value}</button>
    );
}

export default Button;