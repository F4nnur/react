import {useState} from "react";
import './style.scss'

export const Counter = () => {
    const [counter, setCounter] = useState(0)

    const handleClick = () => {
        setCounter(counter + 1)
    }

    return (
        <div>
            <h1>{counter}</h1>
            <button className='myButton' onClick={handleClick}>Add</button>
        </div>
    )
}
