import React, { useReducer } from 'react';

/**
 * reducer(현재 상태, action) {
 * retrun 다음상태
 * }
 * const [현재 상태, dispatch] = useReducer(reducer, reducer에 전달되는 초기 상태)
 */

// useReducer를 사용하여 +1, -1, x2, reset 관리해보기

// 1. Action의 타입을 정의한다.
type Action = 'INCREMENT' | 'DECREMENT' | 'DOUBLE' | 'RESET';

// 2. 현재 상태와 action에 기반해 다음 상태를 반환한다.

const reducer = (currentCount: number, action: Action) => {
    switch (action) {
        case 'INCREMENT':
            return currentCount + 1;
        case 'DECREMENT':
            return currentCount - 1;
        case 'DOUBLE':
            return currentCount * 2;
        case 'RESET':
            return 0;
    }
};

type CounterProps = {
    initialValue: number;
};

const Counter2 = (props: CounterProps) => {
    const { initialValue } = props;
    const [count, dispatch] = useReducer(reducer, initialValue);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => dispatch('INCREMENT')}>+</button>
            <button onClick={() => dispatch('DECREMENT')}>-</button>
            <button onClick={() => dispatch('DOUBLE')}>x2</button>
            <button onClick={() => dispatch('RESET')}>Reset</button>
        </div>
    );
};

export default Counter2;
