import React from "react";
import { Todos } from "../Todos";
import { NewToDoForm } from "../NewToDoForm";
export const Main = () => {
  const [todos, setTodos] = React.useState([
    {
      id: 0,
      title: "Swim",
      done: false,
    },
    {
      id: 1,
      title: "Jiu-jitsu",
      done: false,
    },
    {
      id: 2,
      title: "Work",
      done: false,
    },
  ]);

  const handleAddTodo = (todoTitle) => {
    const newTodo = {
      id: todos.length,
      title: todoTitle,
      done: false,
    };
    setTodos([...todos, newTodo]);
  };

  const handleChangeTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((duetodo) => duetodo.id === id);
    todo.done = !todo.done;
    setTodos(newTodos);
  };

  return (
    <main className="App-main">
      <Todos todos={todos} changeTodo={handleChangeTodo} />
      <hr />
      <NewToDoForm addTodo={handleAddTodo} />
    </main>
  );
};
