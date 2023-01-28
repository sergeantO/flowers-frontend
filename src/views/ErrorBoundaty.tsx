import { Link } from "react-router-dom";

export default function ErrorBoundaty() {
    return (
        <>
            <h2>Страница не найдена</h2>
            <Link to="/">Перейти на главную страницу</Link>
        </>
    )
}
