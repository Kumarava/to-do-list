import React from "react";
import { Todos } from "../Todos";
import { NewToDoForm } from "../NewToDoForm";
import { Filtering } from "../Filtering";
export const Main = () => {
  const [showAll, setShowAll] = React.useState(false);
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
      <Filtering showAll={showAll} setShowAll={setShowAll} />
      <Todos todos={todos} showAll={showAll} changeTodo={handleChangeTodo} />
      <hr />
      <NewToDoForm addTodo={handleAddTodo} />
    </main>
  );
};
