import React from 'react';
import AppRouter from "./routers/AppRouter";
import GlobalStyle from './styles/GlobalStyle';

const App: React.FC = () => {

    return (
        <>
            <GlobalStyle />
            <AppRouter />
        </>
    )
}

export default App;
