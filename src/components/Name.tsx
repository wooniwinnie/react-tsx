import React from 'react';

// 이름을 입력하기 위한 텍스트 박스를 반환함
const Name = () => {
    // input 요소의 onChange 이벤트에 대한 콜백 함수를 정의함
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // 입력된 텍스트를 콘솔에 표기함
        console.log(e.target.value);
    };
    return (
        // style 객체의 키는 캐멀 케이스
        <div style={{ padding: '16px', backgroundColor: 'grey' }}>
            {/* for 대신 htmlFor를 사용 */}
            <label htmlFor='name'>이름</label>
            {/* class & onchange => className & onChange */}
            <input
                type='text'
                id='name'
                className='input-name'
                onChange={onChange}
            />
        </div>
    );
};

export default Name;
