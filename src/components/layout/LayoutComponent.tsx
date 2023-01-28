import React, { FC } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components";
import { ROUTES } from "../../constants";

const StyledTodoItem = styled.nav `
`;

const LayoutComponent: FC = () => {
    return (
        <nav>
            <ul>
                <li><Link to={ROUTES.Finance} >Финансы</Link></li>
                <li><Link to={ROUTES.Users} >Пользователи</Link></li>
                <li><Link to={ROUTES.Stock} >Склад</Link></li>
                <li><Link to={ROUTES.Reports} >Отчеты</Link></li>
                <li><Link to={ROUTES.Clients} >Клиенты</Link></li>
                <li><Link to={ROUTES.Settings} >Настройки</Link></li>
            </ul>
        </nav>
    )
}

export default LayoutComponent