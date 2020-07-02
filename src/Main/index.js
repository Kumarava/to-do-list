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

  const handleAddTodo=(todoTitle)=>{
      const newTodo={
        id: todos.length,
        title: todoTitle,
        done: false,
      };
      setTodos([...todos,newTodo]);
  }
  return (
    <main className="App-main">
      <Todos todos={todos} />
      <hr />
      <NewToDoForm addTodo={handleAddTodo}/>
      
    </main>
  );
};
