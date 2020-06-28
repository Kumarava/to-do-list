import React from "react";
import "./style.css";
export const Todos = ({ todos }) => {
  return (
    <ul className="to-do-list">
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
};
