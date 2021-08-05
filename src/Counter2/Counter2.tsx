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

export type CountType = {
    text: "enter values and press 'SET'" | "Incorrect value!" | ""
    buttonsNotActive: boolean
}
const Counter2 = () => {
    const enterString = "enter values and press 'SET'";
    const errorString = "Incorrect value!"
    const [minValState, setMinValState] = useState<MinValueType>({minVal: 0, error: false})
    const [maxValState, setMaxValState] = useState<MaxValueType>({maxVal: 0, error: false})
    const [counterState, setCounterState] = useState<CountType>({
        text: "enter values and press 'SET'",
        buttonsNotActive: true,
    })
    const [btnSetError, setBtnSetError] = useState(false)
    const [count, setCount] = useState(minValState.minVal)

    useEffect(() => {
        let valueMin = localStorage.getItem('minCounterValue')
        if (valueMin){
            let newMinValue = JSON.parse(valueMin)
            setMinValState({...minValState, minVal: newMinValue})
        }
    }, [])
    useEffect(() => {
        let valueMax = localStorage.getItem('maxCounterValue')
        if (valueMax){
            let newMaxValue = JSON.parse(valueMax)
            setMaxValState({...maxValState, maxVal: newMaxValue})
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('maxCounterValue', JSON.stringify(maxValState.maxVal))
    }, [maxValState.maxVal])
    useEffect(() => {
        localStorage.setItem('minCounterValue', JSON.stringify(minValState.minVal))
    }, [minValState.minVal])


    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) =>{
        let newValue = Number(e.currentTarget.value)
        setMaxValState({...maxValState, maxVal: newValue, error: false})
        setMinValState({...minValState,error: false})
        setCounterState({...counterState, text: enterString, buttonsNotActive: true})
        setBtnSetError(false)
        if (newValue < 0){
            setCounterState({...counterState, text: errorString, buttonsNotActive: true})
            setMaxValState({...maxValState, maxVal: newValue, error: true})
            setBtnSetError(true)
        } else if (newValue === minValState.minVal){
            setCounterState({...counterState, text: errorString, buttonsNotActive: true})
            setMaxValState({...maxValState, maxVal: newValue, error: true})
            setMinValState({...minValState, error: true})
            setBtnSetError(true)
        } else if  (newValue < minValState.minVal){
            setCounterState({...counterState, text: errorString, buttonsNotActive: true})
            setMaxValState({...maxValState, maxVal: newValue, error: true})
            setBtnSetError(true)
        }
    }
    const onChangeMinValue = (e: ChangeEvent<HTMLInputElement>) =>{
        let newValue = Number(e.currentTarget.value)
        setMinValState({...minValState, minVal: newValue, error: false})
        setCounterState({...counterState, text: enterString, buttonsNotActive: true})
        setMaxValState({...maxValState,error: false})
        setBtnSetError(false)
        if (newValue < 0){
            setCounterState({...counterState, text: errorString, buttonsNotActive: true})
            setMinValState({...minValState, minVal: newValue, error: true})
            setBtnSetError(true)
        } else if (newValue === maxValState.maxVal){
            setCounterState({...counterState, text: errorString, buttonsNotActive: true})
            setMaxValState({...maxValState,  error: true})
            setMinValState({...minValState,  minVal: newValue, error: true})
            setBtnSetError(true)
        } else if  (newValue > maxValState.maxVal){
            setCounterState({...counterState, text: errorString, buttonsNotActive: true})
            setMinValState({...minValState,  minVal: newValue, error: true})
            setBtnSetError(true)
        }
    }

    const handleIncrement = () =>{
        setCount(count + 1)
    }
    const handleReset = (minValue: number) =>{
        setCount(minValue)
    }

    const setHandler = () =>{
        setCounterState({ text: "", buttonsNotActive: false})
        setCount(minValState.minVal)
        setBtnSetError(true)
    }

    return (
        <div className={s.container}>
            <CounterControl
                changeMaxVal={onChangeMaxValue}
                changeMinVal={onChangeMinValue}
                onSetClick={setHandler}
                errorMax={maxValState.error}
                errorMin={minValState.error}
                btnSetError={btnSetError}
                maxVal={maxValState.maxVal}
                minVal={minValState.minVal}
            />
            <CounterInterface
                count={count}
                handleIncrement={handleIncrement}
                handleReset={handleReset}
                countText={counterState.text}
                minValue={minValState.minVal}
                maxValue={maxValState.maxVal}
            />
        </div>

    );
}

export default Counter2;