import {useState} from "react";
import classes from './style.module.scss'

export const Counter = () => {
    const [counter, setCounter] = useState(0)

    const handleClick = () => {
        setCounter(counter + 1)
    }

    return (
        <div>
            <h1>{counter}</h1>
            <button className={classes.myButton} onClick={handleClick}>Add</button>
        </div>
    )
}
