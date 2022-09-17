import React from 'react';
import ReactDOM from 'react-dom/client';
import {Page} from "./components/page";
import theme from "./components/theme";
import {ThemeProvider} from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <Page />
        </ThemeProvider>
    </React.StrictMode>
);
