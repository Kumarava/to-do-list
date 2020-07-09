import React from "react";
import "./style.css";
import Checkbox from "@material-ui/core/Checkbox";

export const Todos = ({ todos }) => {
  const handleChange = (event) => {};
  return (
    <ul className="to-do-list">
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
};
