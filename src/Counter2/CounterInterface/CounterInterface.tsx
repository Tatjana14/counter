import s from "./CounterInterface.module.css";
import Button from "../../Button/Button";
import React, {useState} from "react";

type PropsType = {
    counterStringValue: string
    counterNumValue: number
    maxValue:  number
    minValue:  number
    handleIncrement: () => void
    handleReset: () => void
}

const CounterInterface: React.FC<PropsType> = ({counterStringValue, counterNumValue, maxValue, minValue, handleIncrement, handleReset}) => {
    const counterNumClass = counterNumValue === maxValue ? s.counterStop : s.counter
    const counterStrClass = counterStringValue === "Incorrect value!" ? s.counterError : s.counterText

    return(
        <div className={s.container}>
            <div className={s.display}>
                {counterStringValue !== ""  && <span className={counterStrClass} >{counterStringValue}</span>}
                {counterStringValue === "" && <span className={counterNumClass}>{counterNumValue}</span>}
            </div>
            <div className={s.buttons}>
                <Button  callback={handleIncrement} disabled={counterStringValue !== ""  || counterNumValue === maxValue} value={'inc'} />
                <Button callback={handleReset} disabled={counterStringValue !== ""  || counterNumValue === minValue} value={'reset'} />
            </div>
        </div>
    )
}

export default CounterInterface;