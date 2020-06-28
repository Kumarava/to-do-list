import React from "react";
import { Todos } from "../Todos";
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

  return (
    <main className="App-main">
      <Todos todos={todos} />
    </main>
  );
};
