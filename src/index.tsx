import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import {BrowserRouter} from "react-router-dom";
import ThemeProvider from "./widgets/ThemeSwitcher/model/ThemeProvider";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <ThemeProvider>
            <React.StrictMode>
                <App/>
            </React.StrictMode>
        </ThemeProvider>
    </BrowserRouter>
);
