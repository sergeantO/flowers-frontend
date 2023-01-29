import React, { FC } from "react";
import { Link } from "react-router-dom";

const ErrorBoundary:FC = () => {
    return (
        <>
            <h2>Страница не найдена</h2>
            <Link to="/">Перейти на главную страницу</Link>
        </>
    )
}

export default ErrorBoundary
