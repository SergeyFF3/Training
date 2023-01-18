import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import {BrowserRouter} from "react-router-dom";
import ThemeProvider from "./widgets/ThemeSwitcher/model/ThemeProvider";
import {Provider} from 'react-redux';
import { store } from 'app/provider/StoreProvider/store';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <ThemeProvider>
                <React.StrictMode>
                    <App/>
                </React.StrictMode>
            </ThemeProvider>
        </Provider>
    </BrowserRouter>
);
