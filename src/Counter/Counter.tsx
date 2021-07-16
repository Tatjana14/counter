import React, {useState} from 'react';
import s from './Counter.module.css';
import Display from "../Display/Display";
import Button from "../Button/Button";

function Counter() {
    const finishCount = 5
    const startCount = 0
    const [count, setCount] = useState(startCount)

    const handleIncrement = () =>{
        setCount(count + 1)
    }
    const handleReset = () =>{
        setCount(startCount)
    }
    return (
        <div className={s.container}>
            <Display value={count} />
            <div className={s.buttons}>
                <Button onClick={handleIncrement} disabled={count === finishCount} value={'inc'} />
                <Button onClick={handleReset} disabled={count === startCount} value={'reset'} />
            </div>
        </div>
    );
}

export default Counter;