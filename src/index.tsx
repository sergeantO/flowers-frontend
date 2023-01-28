import React from 'react';
import { createRoot } from 'react-dom/client';
import {
    createBrowserRouter,
    Link,
    Outlet,
    RouterProvider,
} from "react-router-dom";
import "react-toastify/dist/ReactToastify.min.css";
import Todo from './views/Todo';
import ErrorBoundaty from './components/ErrorBoundaty';

// TODO Переделал роутер в дерево, базовый элемент - лейаут, дочерние - контент
//  Элемент <Outlet /> отображает дочерние элементы
const router = createBrowserRouter([
    {   
        //TODO Заменить элемент на лейаут компонент
        element: <div>
                    <nav>
                        <ul>
                            <li><Link to="/finance" >Финансы</Link></li>
                            <li><Link to="/users" >Пользователи</Link></li>
                            <li><Link to="/stock" >Склад</Link></li>
                            <li><Link to="/reports" >Отчеты</Link></li>
                            <li><Link to="/clients" >Клиенты</Link></li>
                            <li><Link to="/settings" >Настройки</Link></li>
                        </ul>
                    </nav>
                    <Outlet />
                </div>,
        errorElement: <ErrorBoundaty />,
        children: [
            {
                path: "/",
                //TODO Заменить на компонент
                element: <div>Стартовая страница, в фигме не понятно, что тут будет</div>,
            },
            {
                path: "finance",
                //TODO Заменить на компонент
                element: <div>Финансы</div>
            },
            {
                path: "users",
                //TODO Заменить на компонент
                element: <div>Пользователи</div>
            },
            {
                path: "stock",
                //TODO Заменить на компонент
                element: <div>Склад</div>
            },
            {
                path: "reports",
                //TODO Заменить на компонент
                element: <div>Отчеты</div>
            },
            {
                path: "clients",
                //TODO Заменить на компонент
                element: <div>Клиенты</div>
            },
            {
                path: "settings",
                //TODO Заменить на компонент
                element: <div>Настройки</div>
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
