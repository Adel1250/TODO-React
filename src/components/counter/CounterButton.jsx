import './Counter.css'

export default function CounterButton({ value, incrementCounterFunction, decrementCounterFunction }) {
    return (
        <div className="Counter">
            <div>
                <button className="counterButton" onClick={() => incrementCounterFunction(value)}>+{value}</button>
                <button className="counterButton" onClick={() => decrementCounterFunction(value)}>-{value}</button>
            </div>
        </div>
    )
}