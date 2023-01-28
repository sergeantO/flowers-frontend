import React, { useState } from "react";
import { Button, Checkbox, IconButton, TextField } from "@mui/material";
import { ITodo } from "../stores/TodoStore";
import { useStores } from "../services/use-stores";
import { observer } from "mobx-react-lite";
import { 
    Delete as DeleteIcon,
    Edit as EditIcon
} from "@mui/icons-material";
import FlexContainer from "./FlexContainer";
import styled from "styled-components";

interface IProps {
  todo: ITodo;
}

const StyledTodoItem = styled.li `
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  padding: 15px;
  margin: 50px;
  align-items: 10px;
  background-color: white;
  border-radius: 4px;
  margin: 10px 0px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 2px 1px -1px;
`;


const TodoItem = observer(({ todo }: IProps) => {
  const [editMode, setEditMode] = useState(false);
  const [formValue, setFormvalue] = useState(todo.text);
  const { todoStore } = useStores();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTodo = {
      ...todo,
      text: formValue
    };
    todoStore.updateTodo(newTodo);
    setEditMode(false);
  };

  return (
    <StyledTodoItem>
      <FlexContainer>
        <Checkbox
          checked={todo.completed}
          onChange={() => todoStore.toggleCompleted(todo.id)}
        />
        {!editMode && <div onClick={() => setEditMode(true)}>{todo.text}</div>}
        {editMode && (
          <form action="" onSubmit={handleSubmit}>
            <TextField
              style={{ marginRight: 10 }}
              value={formValue}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFormvalue(e.target.value)
              }
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              style={{ marginRight: 10 }}
            >
              Save
            </Button>
            <Button type="button" onClick={() => setEditMode(false)}>
              cancel
            </Button>
          </form>
        )}
      </FlexContainer>

      <div>
        <IconButton onClick={() => setEditMode(!editMode)}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={() => todoStore.deleteTodo(todo.id)}>
          <DeleteIcon />
        </IconButton>
      </div>
    </StyledTodoItem>
  );
});

export default TodoItem;
