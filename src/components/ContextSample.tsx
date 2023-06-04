import { title } from 'process';
import React from 'react';

// Title을 전달하기 위해 Context를 작성함

const TitleContext = React.createContext('');

// Title 컴포넌트 안에서 Context 값을 참조함
const Title = () => {
    return (
        <TitleContext.Consumer>
            {/** Consumer 바로 아래 함수를 두고, Context 값을 참조함 */}
            {(title) => {
                return <h1>{title}</h1>;
            }}
        </TitleContext.Consumer>
    );
};

const Header = () => {
    return (
        <div>
            {/** Header에서 Title로는 아무런 데이터를 전달하지 않음 */}
            <Title />
        </div>
    );
};

// Page 컴포넌트 안에서 Context에 값을 전달함
const Page = () => {
    const title = 'React Book';
    return (
        <TitleContext.Provider value={title}>
            <Header />
        </TitleContext.Provider>
    );
};

export default Page;
