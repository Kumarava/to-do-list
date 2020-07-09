import React from "react";
import "./style.css";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

export const Todos = ({ todos }) => {
  const handleChange = (event) => {};
  return (
    <ul className="to-do-list">
      {todos.map((todo) => (
        <li key={todo.id}>
          <FormControlLabel
            control={<Checkbox onChange={handleChange} color="primary" />}
          />
          {todo.title}
        </li>
      ))}
    </ul>
  );
};
