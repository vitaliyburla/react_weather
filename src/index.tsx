import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { store } from './store';
import { Provider } from 'react-redux';
import ThemeConfig from './theme';

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <ThemeConfig>
                <App />
            </ThemeConfig>
        </HashRouter>
    </Provider>,
    document.getElementById('root')
);
