import React from 'react';
import AppRouter from './components/AppRouter';
import ThemeConfig from './theme';
import GlobalStyles from './theme/globalStyles';

function App() {
    return (
        <>
            <GlobalStyles />
            <AppRouter />
        </>
    );
}

export default App;
