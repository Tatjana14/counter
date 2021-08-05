import InputValue from "./InputValue/InputValue";
import s from './CounterControl.module.css'
import Button from "../../Button/Button";
import {ChangeEvent} from "react";

type PropsType = {
    changeMaxVal: (e: ChangeEvent<HTMLInputElement>) => void
    changeMinVal: (e: ChangeEvent<HTMLInputElement>) => void
    onSetClick: () => void
    errorMax: boolean
    errorMin: boolean
    btnSetError: boolean
    maxVal: number
    minVal: number
}
const CounterControl: React.FC<PropsType> = (props) => {

    return(
        <div className={s.container}>
            <div className={s.controlWrapper}>
                <InputValue value={props.maxVal} errorStatus={props.errorMax} callback={props.changeMaxVal} text="max value" />
                <InputValue value={props.minVal} errorStatus={props.errorMin} callback={props.changeMinVal} text="min value" />
            </div>
            <div className={s.buttonWrapper}>
                <Button disabled={props.btnSetError} value="set" callback={props.onSetClick}/>
            </div>
        </div>
    )
}

export default CounterControl;