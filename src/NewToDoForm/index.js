import React from "react";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import { TextField, Box } from "@material-ui/core";

export const NewToDoForm = ({ addTodo }) => {
  const [todoTitle, setTodoTitle] = React.useState("");
  const handleChange = (event) => {
    setTodoTitle(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(todoTitle);
    if (!todoTitle.trim()) return;
    addTodo(todoTitle.trim());
    setTodoTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box display="flex">
        <TextField
          value={todoTitle}
          type="text"
          label="New Todo"
          onChange={handleChange}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          endIcon={<AddIcon />}
        >
          Add
        </Button>
      </Box>
    </form>
  );
};
