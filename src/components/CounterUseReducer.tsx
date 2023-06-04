// useReducer는 상태를 다루기 위한 훅이다.
// 복잡한 상태 전이를 간단하게 기술할 수 있다.
// 배열, 객체 등의 여러 데이터를 모은 것을 상태로 다루는 경우에 많이 사용한다.
// useState 보다 복잡한 용도에 사용 적합하다.
// 상태 업데이트를 호출하는 방법은 구체적인 상태에 의존하지 않기 때문에 간단하게 유지 가능
// 상태를 업데이트 하는 로직을 컴포넌트 밖의 함수로 추출하기 때문에 테스트도 쉬워짐

/**
 * reducer(현재 상태, action) {
 * retrun 다음상태
 * }
 * const [현재 상태, dispatch] = useReducer(reducer, reducer에 전달되는 초기 상태)
 */

import React from 'react';
import { useReducer } from 'react';

// reducer가 받은 action 타입을 정의
type Action = 'DECREMENT' | 'INCREMENT' | 'DOUBLE' | 'RESET';

// 현재 상태와 action에 기반해 다음 상태를 반환
const CounterUseReducer = (currentCount: number, action: Action) => {
    switch (action) {
        case 'INCREMENT':
            return currentCount + 1;
        case 'DECREMENT':
            return currentCount - 1;
        case 'DOUBLE':
            return currentCount * 2;
        case 'RESET':
            return 0;
        default:
            return currentCount;
    }
};

type CounterProps = {
    initialValue: number;
};

const Counter = (props: CounterProps) => {
    const { initialValue } = props;
    const [count, dispatch] = useReducer(CounterUseReducer, initialValue);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => dispatch('DECREMENT')}>-</button>
            <button onClick={() => dispatch('INCREMENT')}>+</button>
            <button onClick={() => dispatch('DOUBLE')}>x2</button>
            <button onClick={() => dispatch('RESET')}>Reset</button>
        </div>
    );
};

export default Counter;
