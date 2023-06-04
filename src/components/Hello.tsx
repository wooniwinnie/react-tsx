import React from 'react';

// Hello는 클릭하면 얼럿을 나타내는 텍스트를 반환함
const Hello = () => {
    // 클릭 시 호출되는 함수
    const onClick = () => {
        // 얼럿
        alert('hello');
    };
    const text = 'Hello, React';

    // text를 자식으로 갖는 div요소를 반환함
    // div의 onClick을 클릭 시, 콜백함수를 반환함
    return (
        <>
            <div onClick={onClick}>{text}</div>
            <span>Hello, React!</span>
        </>
    );
};
export default Hello;
