import styled from "styled-components";
import { ToastContainer } from "react-toastify";
import TodoList from "../components/TodoList";
import CssBaseline from "@mui/material/CssBaseline";

const StyledApp = styled.div`
    background-color: #f4f6f8;
    height: 100vh;
    padding: 1rem;
`;

export default function Todo() {
    return (
        <StyledApp>
            <CssBaseline />
            <TodoList />
            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
            />
        </StyledApp>
    );
}