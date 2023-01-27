import React, { useState } from "react";
import { Modal, Button, TextField } from "@mui/material";
import { useStores } from "../services/use-stores";
import styled from "styled-components";

interface IProps {
    isOpen: boolean;
    closeModal: () => void;
}

export const ModalContent = styled.div`
  background-color: white;
  padding: 1rem;
  max-width: 600px;
  margin: 1rem auto;
`;

const ModalNewTodo = ({ isOpen, closeModal }: IProps) => {
  const [text, setText] = useState("");
  const { todoStore } = useStores();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTodo = {
      id: Date.now(),
      text,
      completed: false
    };
    todoStore.addTodo(newTodo);
    closeModal();
  };

  return (
    <Modal aria-labelledby="modal-new-todo" open={isOpen} onClose={closeModal}>
      <ModalContent>
        <h2 id="modal-new-todo">Add new Todo</h2>
        <form onSubmit={handleSubmit} noValidate>
          <TextField
            id="standard-basic"
            autoFocus
            label="Todo"
            fullWidth
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange(e)
            }
          />
          <Button
            disabled={text.length === 0}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{ marginTop: "1rem" }}
          >
            Submit
          </Button>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default ModalNewTodo;
