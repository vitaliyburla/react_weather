import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store';
import { Provider } from 'react-redux';
import ThemeConfig from './theme';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <ThemeConfig>
                <App />
            </ThemeConfig>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
