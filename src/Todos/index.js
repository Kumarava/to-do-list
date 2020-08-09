import React from "react";
import "./style.css";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

export const Todos = ({ showAll, todos, changeTodo }) => {
  const handleChange = (id) => {
    changeTodo(id);
  };
  return (
    <ul className="to-do-list">
      {todos.map((todo) => {
        if (!showAll && todo.done) {
          return null;
        }
        return (
          <li key={todo._id}>
            <FormControlLabel
              label={todo.title}
              control={
                <Checkbox
                  onChange={() => handleChange(todo._id)}
                  color="primary"
                  checked={todo.done}
                />
              }
            />
          </li>
        );
      })}
    </ul>
  );
};
