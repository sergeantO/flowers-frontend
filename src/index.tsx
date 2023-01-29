import React from 'react';
import { createRoot } from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { CssBaseline } from '@mui/material';
import "react-toastify/dist/ReactToastify.min.css";
import { router } from './routing'

const Layout = function() {
    return(
        <React.StrictMode>
            <CssBaseline />
            <RouterProvider router={router} />
        </React.StrictMode>
    )
}

const rootElement = createRoot( document.getElementById("root") as HTMLElement )

rootElement.render(
    <Layout />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
