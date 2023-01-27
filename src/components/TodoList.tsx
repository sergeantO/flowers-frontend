import React, { useState } from "react";
import { observer } from "mobx-react";
import TodoItem from "./TodoItem";
import { Button } from "@mui/material";
import ModalNewTodo from "./ModalNewTodo";
import { useStores } from "../services/use-stores";
import styled from "styled-components";

// styles
const StyledTodoList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  min-height: 300px;
`;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.div``;

// component
const TodoList = observer(() => {
  const [modalNewTodoIsOpen, setModalNewTodo] = useState(false);
  const { todoStore } = useStores();

  return (
    <>
      {modalNewTodoIsOpen && (
        <ModalNewTodo
          isOpen={modalNewTodoIsOpen}
          closeModal={() => setModalNewTodo(false)}
        />
      )}
      <Container>
        <StyledHeader>
          <h2>mobx todo</h2>
          <Button
            color="primary"
            variant="contained"
            onClick={() => setModalNewTodo(true)}
          >
            Add new
          </Button>
        </StyledHeader>
        <StyledTodoList>
          {todoStore.incompleteTodos.length === 0 && <p>Nothing to do!</p>}
          {todoStore.incompleteTodos.map(todo => {
            return <TodoItem key={todo.id} todo={todo} />;
          })}
        </StyledTodoList>
        <h3>completed {todoStore.todoProgress}</h3>
        <StyledTodoList>
          {todoStore.completedTodos.map(todo => {
            return <TodoItem key={todo.id} todo={todo} />;
          })}
        </StyledTodoList>
      </Container>
    </>
  );
});

export default TodoList;
