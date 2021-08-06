import InputValue from "./InputValue/InputValue";
import s from './CounterControl.module.css'
import Button from "../../Button/Button";
import {ChangeEvent} from "react";

type PropsType = {
    changeMaxVal: (e: ChangeEvent<HTMLInputElement>) => void
    changeMinVal: (e: ChangeEvent<HTMLInputElement>) => void
    onSetClick: () => void
    btnSetError: boolean
    maxVal: number
    minVal: number
    counterStringValue: string
}
const CounterControl: React.FC<PropsType> = ({changeMaxVal, changeMinVal, onSetClick, minVal, maxVal, btnSetError, counterStringValue}) => {
    const errorMaxConditions = maxVal < 0 || maxVal === minVal || maxVal < minVal
    const errorMinConditions = minVal < 0 || maxVal === minVal || minVal > maxVal
    const errorBtnSetConditions = counterStringValue !== "Enter values and press 'SET'" && btnSetError
    return(
        <div className={s.container}>
            <div className={s.controlWrapper}>
                <InputValue value={maxVal} errorStatus={errorMaxConditions} callback={changeMaxVal} text="max value" />
                <InputValue value={minVal} errorStatus={errorMinConditions} callback={changeMinVal} text="min value" />
            </div>
            <div className={s.buttonWrapper}>
                <Button disabled={errorBtnSetConditions} value="set" callback={onSetClick}/>
            </div>
        </div>
    )
}

export default CounterControl;