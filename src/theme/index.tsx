import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { FC } from 'react';
// import components from './components';
import palette from './palette';
import typography from './typography';

interface IThemeConfig {
    children: React.ReactNode;
}

const ThemeConfig: FC<IThemeConfig> = ({ children }) => {
    const theme = createTheme({
        palette,
        typography,
        // components,
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};

export default ThemeConfig;
