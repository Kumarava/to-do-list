import React from "react";

export const NewToDoForm = ({ addTodo }) => {
  const [todoTitle, setTodoTitle] = React.useState("");
  const handleChange = (event) => {
    setTodoTitle(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(todoTitle);
    setTodoTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={todoTitle}
        type="text"
        placeholder="New Todo"
        onChange={handleChange}
      />
      <button type="submit">Add</button>
    </form>
  );
};
