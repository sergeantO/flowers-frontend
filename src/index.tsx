import React from 'react';
import { createRoot } from 'react-dom/client';
import {
    createBrowserRouter,
    Link,
    RouterProvider,
} from "react-router-dom";
import "react-toastify/dist/ReactToastify.min.css";
import Todo from './views/Todo';

const router = createBrowserRouter([
    {
        path: "/todo",
        element: <Todo />,
    },
    {
        path: "/",
        element: <div><h1>hello</h1><Link to={`todo`}>Your Name</Link></div>
    }
  ]);

const Layout = function() {
    return(
        <React.StrictMode>
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
