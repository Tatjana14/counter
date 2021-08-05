import React, {ChangeEvent} from "react";
import s from './InputValue.module.css'

type Propstype = {
    text: string
    callback: (e: ChangeEvent<HTMLInputElement>) => void
    errorStatus: boolean
    value: number
}
const InputValue: React.FC<Propstype> = (props) => {
    const value = props.value.toString()
    const inputClass = props.errorStatus? s.inputError : s.input
    return(
        <div className={s.wrapper}>
            <span className={s.text}>{props.text}</span>
            <input value={value} onChange={props.callback} className={inputClass} type="number"/>
        </div>
    )
}

export default InputValue;