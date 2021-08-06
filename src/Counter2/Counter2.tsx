import React, {ChangeEvent, useEffect, useState} from 'react';
import CounterInterface from "./CounterInterface/CounterInterface";
import CounterControl from "./CounterContol/CounterControl";
import s from './Counter2.module.css'

export type MaxValueType = {
    maxVal: number
    error: boolean
}
export type MinValueType = {
    minVal: number
    error: boolean
}


const Counter2 = () => {
    const enterString = "Enter values and press 'SET'";
    const errorString = "Incorrect value!"
    const [minVal, setMinVal] = useState<number>(0)
    const [maxVal, setMaxVal] = useState<number>(0)
    const [counterStringValue, setCounterStringValue] = useState<string>("")
    const [counterNumValue, setCounterNumValue] = useState<number>(minVal)
    const [btnSetError, setBtnSetError] = useState(false)

    useEffect(() => {
        let valueMin = localStorage.getItem('minCounterValue')
        if (valueMin){
            let newMinValue = JSON.parse(valueMin)
            setMinVal(newMinValue)
        }
        let valueMax = localStorage.getItem('maxCounterValue')
        if (valueMax){
            let newMaxValue = JSON.parse(valueMax)
            setMaxVal(newMaxValue)
        }
        let valueCounterStr = localStorage.getItem('valueString')
        if (valueCounterStr){
            setCounterStringValue(valueCounterStr)
        }
        let valueCounterNum = localStorage.getItem('valueNumber')
        if (valueCounterNum){
            let newValueCounterNum= JSON.parse(valueCounterNum)
            setCounterNumValue(newValueCounterNum)
        }
        setBtnSetError(true)
    }, [])
    useEffect(() => {
        localStorage.setItem('minCounterValue', JSON.stringify(minVal))
        localStorage.setItem('maxCounterValue', JSON.stringify(maxVal))
        localStorage.setItem('valueString', counterStringValue)
        localStorage.setItem('valueNumber', JSON.stringify(counterNumValue))
    }, [maxVal, minVal, counterStringValue,counterNumValue ])

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) =>{
        let newValue = Number(e.currentTarget.value)
        setMaxVal(newValue)
        if(newValue >= 0 && newValue > minVal && minVal >= 0){
            setCounterStringValue(enterString)
            setBtnSetError(false)
        } else {
            setCounterStringValue(errorString)
            setBtnSetError(true)
        }
    }
    const onChangeMinValue = (e: ChangeEvent<HTMLInputElement>) =>{
        let newValue = Number(e.currentTarget.value)
        setMinVal(newValue)
        if(newValue >= 0 && newValue < maxVal && maxVal >=0){
            setCounterStringValue(enterString)
            setBtnSetError(false)
        } else {
            setCounterStringValue(errorString)
            setBtnSetError(true)
        }
    }

    const handleIncrement = () =>{
        setCounterNumValue( (counterNumValue) + 1)
    }
    const handleReset = () =>{
        setCounterNumValue(minVal)
    }

    const setHandler = () =>{
        setCounterStringValue("")
        setCounterNumValue(minVal)
        setBtnSetError(true)
    }

    return (
        <div className={s.container}>
            <CounterControl
                changeMaxVal={onChangeMaxValue}
                changeMinVal={onChangeMinValue}
                onSetClick={setHandler}
                btnSetError={btnSetError}
                maxVal={maxVal}
                minVal={minVal}
                counterStringValue={counterStringValue}
            />
            <CounterInterface
                counterStringValue={counterStringValue}
                counterNumValue={counterNumValue}
                handleIncrement={handleIncrement}
                handleReset={handleReset}
                minValue={minVal}
                maxValue={maxVal}
            />
        </div>

    );
}

export default Counter2;