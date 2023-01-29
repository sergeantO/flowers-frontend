import { createBrowserRouter } from "react-router-dom";

import ErrorBoundary from './views/ErrorBoundary';
import LayoutComponent from './components/layout/LayoutComponent';

import Home from './views/Home';
import Finance from './views/Finance';
import Users from './views/Users';
import Stock from './views/Stock';
import Clients from './views/Clients';
import Settings from './views/Settings';
import Reports from './views/Reports';
import Todo from './views/Todo';
import Managers from './views/Managers';
import Florists from './views/Florists';
import Logistics from './views/Logistics';

export const ROUTES = {
    Home: "/",
    Finance: "/finance",
    Users: "/users",
    Stock: "/stock",
    Reports: "/reports",
    Clients: "/clients",
    Settings: "/settings",
    Managers: "/managers",
    Florists: "/florists",
    Logistics: "/logistics"
}

// TODO Переделал роутер в дерево, базовый элемент - лейаут, дочерние - контент
//  Элемент <Outlet /> отображает дочерние элементы
export const router = createBrowserRouter([
    {
        //TODO Заменить элемент на лейаут компонент
        element: <LayoutComponent />,
        errorElement: <ErrorBoundary />,
        children: [
            {
                path: ROUTES.Home,
                element: <Home />
            },
            {
                path: ROUTES.Finance,
                element: <Finance />
            },
            {
                path: ROUTES.Users,
                element: <Users />
            },
            {
                path: ROUTES.Stock,
                element: <Stock />
            },
            {
                path: ROUTES.Reports,
                element: <Reports />
            },
            {
                path: ROUTES.Clients,
                element: <Clients />
            },
            {
                path: ROUTES.Settings,
                element: <Settings />
            },
            {
                path: ROUTES.Managers,
                element: <Managers />
            },
            {
                path: ROUTES.Florists,
                element: <Florists />
            },
            {
                path: ROUTES.Logistics,
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
