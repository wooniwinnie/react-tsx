import React, { useState } from 'react';

type CounterProps = {
    initialValue: number;
};

const CounterUseState = (props: CounterProps) => {
    const { initialValue } = props;
    const [count, setCount] = useState(initialValue);
    return (
        <div>
            <p>Count : {count}</p>
            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={() => setCount((prevCount) => prevCount + 1)}>
                +
            </button>
        </div>
    );
};

export default CounterUseState;
