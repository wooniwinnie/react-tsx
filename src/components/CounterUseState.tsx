import React, { useState } from 'react';

type CounterProps = {
    initialValue: number;
};

const CounterUseState = (props: CounterProps) => {
    const { initialValue } = props;
    // 카운트를 유지하는 첫 번째 상태를 useState()로 선언함, 인수에는 초기값 지정
    // count 가 현재 상태, setCount가 상태를 업데이트하는 함수
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
