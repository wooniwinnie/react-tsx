import React from 'react';

// 이름 없는 함수로 컴포넌트를 정의하고, Text라는 변수에 대입함
// Text 컴포넌트는 부모로부터 'content'라는 데이터를 받음
const Text = (props: { content: string }) => {
    // props로부터 content라는 값을 꺼냄
    const { content } = props;
    // props로 전달된 데이터를 표시
    return <p className='text'>{content}</p>;
};

// 정의한 컴포넌트를 Message라는 변수에 대입함
const Message = (props: {}) => {
    const content1 = 'This is parent component';
    const content2 = 'Message uses Text component';
    return (
        <div>
            {/* content라는 키로 컴포넌트에 데이터를 전달함 */}
            <Text content={content1} />
            {/* 다른 데이터를 전달하면, 다른 내용이 표시됨 */}
            <Text content={content2} />
        </div>
    );
};

export default Message;
