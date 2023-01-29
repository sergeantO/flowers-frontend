import React from 'react';
import { createRoot } from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import "react-toastify/dist/ReactToastify.min.css";
import Todo from './views/Todo';
import ErrorBoundary from './views/ErrorBoundary';
import LayoutComponent from './components/layout/LayoutComponent';
import { ROUTES } from './constants';
import Home from './views/Home';
import Finance from './views/Finance';
import Users from './views/Users';
import Stock from './views/Stock';
import Clients from './views/Clients';
import Settings from './views/Settings';
import Reports from './views/Reports';
import { CssBaseline } from '@mui/material';
import Managers from './views/Managers';
import Florists from './views/Florists';
import Logistics from './views/Logistics';

// TODO Переделал роутер в дерево, базовый элемент - лейаут, дочерние - контент
//  Элемент <Outlet /> отображает дочерние элементы
const router = createBrowserRouter([
    {   
        //TODO Заменить элемент на лейаут компонент
        element: <div>
                    <LayoutComponent />
                </div>,
        errorElement: <ErrorBoundary />,
        children: [
            {
                path: ROUTES.Home,
                //TODO Заменить на компонент
                element: <Home />
            },
            {
                path: ROUTES.Finance,
                //TODO Заменить на компонент
                element: <Finance />
            },
            {
                path: ROUTES.Users,
                //TODO Заменить на компонент
                element: <Users />
            },
            {
                path: ROUTES.Stock,
                //TODO Заменить на компонент
                element: <Stock />
            },
            {
                path: ROUTES.Reports,
                //TODO Заменить на компонент
                element: <Reports />
            },
            {
                path: ROUTES.Clients,
                //TODO Заменить на компонент
                element: <Clients />
            },
            {
                path: ROUTES.Settings,
                //TODO Заменить на компонент
                element: <Settings />
            },
            {
                path: ROUTES.Managers,
                //TODO Заменить на компонент
                element: <Managers />
            },
            {
                path: ROUTES.Florists,
                //TODO Заменить на компонент
                element: <Florists />
            },
            {
                path: ROUTES.Logistics,
                //TODO Заменить на компонент
                element: <Logistics />
            },
            //TODO оставил для тестов
            {
                path: "todo",
                element: <Todo />,
            },
        ],
    }
  ]);

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
