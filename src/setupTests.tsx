// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import ThemeConfig from './theme';
import { store } from './store/index';

interface ISetupStoreProps {
    children: React.ReactNode;
}
const SetupTests: FC<ISetupStoreProps> = ({ children }) => {
    return (
        <Provider store={store}>
            <MemoryRouter>
                <ThemeConfig>{children}</ThemeConfig>
            </MemoryRouter>
        </Provider>
    );
};

export default SetupTests;
