import { useState } from 'react';
import CounterButton from './CounterButton'
import './Counter.css'

export default function Counter() {
    const [count, setCount] = useState(0);

    function incrementCounterFunction(value) {
        setCount(count + value)
    }

    function decrementCounterFunction(value) {
        setCount(count - value)
    }

    function resetCounter() {
        setCount(0)
    }

    return (
        <>
            <CounterButton
                value={1}
                incrementCounterFunction={incrementCounterFunction}
                decrementCounterFunction={decrementCounterFunction} />
            <CounterButton
                value={2}
                incrementCounterFunction={incrementCounterFunction}
                decrementCounterFunction={decrementCounterFunction} />
            <CounterButton
                value={5}
                incrementCounterFunction={incrementCounterFunction}
                decrementCounterFunction={decrementCounterFunction} />
            <span className="count">{count}</span>
            <div>
                <button className="resetButton" onClick={resetCounter}>Reset</button>
            </div>
        </>
    )
}