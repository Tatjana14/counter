import s from "./CounterInterface.module.css";
import Button from "../../Button/Button";
import React, {useState} from "react";

type PropsType = {
    countText: string
    maxValue:  number
    minValue:  number
    handleIncrement: () => void
    handleReset: (minValue: number) => void
    count: number
}

const CounterInterface: React.FC<PropsType> = (props) => {
    const handleReset = () =>{
        props.handleReset(props.minValue)
    }
    const counterClass = props.count === props.maxValue ? s.counterStop : s.counter
    return(
        <div className={s.container}>
            <div className={s.display}>
                {props.countText !== "" && <span >{props.countText}</span>}
                {props.countText === ""  && <span className={counterClass}>{props.count}</span>}
            </div>
            <div className={s.buttons}>
                <Button  callback={props.handleIncrement} disabled={props.count === props.maxValue} value={'inc'} />
                <Button callback={handleReset} disabled={props.count === props.minValue} value={'reset'} />
            </div>
        </div>
    )
}

export default CounterInterface;