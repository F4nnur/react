import React from 'react';
import Button from 'shared/UI/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../model/slice/CounterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);
    const increment = () => {
        dispatch(counterActions.increment());
    };
    const decrement = () => {
        dispatch(counterActions.decrement());
    };
    return (
        <div>
            <div>{counterValue}</div>
            <Button onClick={increment}>+</Button>
            <Button onClick={decrement}>-</Button>
        </div>
    );
};

export default Counter;
