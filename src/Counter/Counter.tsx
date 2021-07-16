import React, {useState} from 'react';
import s from './Counter.module.css';
import Display from "../Display/Display";
import Button from "../Button/Button";

function Counter() {
    const [count, setCount] = useState(0)

    const handleIncrement = () =>{
        setCount(count + 1)
    }
    const handleReset = () =>{
        setCount(0)
    }
    return (
        <div className={s.container}>
            <Display value={count} />
            <div className={s.buttons}>
                <Button onClick={handleIncrement} disabled={count === 5} value={'inc'} />
                <Button onClick={handleReset} disabled={count === 0} value={'reset'} />
            </div>
        </div>
    );
}

export default Counter;