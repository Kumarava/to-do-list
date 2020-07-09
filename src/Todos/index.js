import React from "react";
import "./style.css";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

export const Todos = ({ todos, changeTodo }) => {
  const handleChange = (id) => {
    changeTodo(id);
  };
  return (
    <ul className="to-do-list">
      {todos.map((todo) => (
        <li key={todo.id}>
          <FormControlLabel
            control={
              <Checkbox
                onChange={() => handleChange(todo.id)}
                color="primary"
              />
            }
          />
          {todo.title}
        </li>
      ))}
    </ul>
  );
};
