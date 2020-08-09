import React from "react";
import { Todos } from "../Todos";
import { NewToDoForm } from "../NewToDoForm";
import { Filtering } from "../Filtering";
import { Paper, Box } from "@material-ui/core";
import { useParams } from "react-router-dom";
export const Todomain = () => {
  const [showAll, setShowAll] = React.useState(false);
  const [todos, setTodos] = React.useState([]);
  let { userId } = useParams();
  React.useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch(
        `https://merey-todo-list.herokuapp.com/api/users/${userId}/todos`
      );

      const todosData = await response.json();
      setTodos(todosData);
    };
    fetchTodos();
  }, [userId]);

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
  if (!userId) return <h1>Please select User</h1>;
  return (
    <Paper>
      <Box p={2}>
        {!!todos.length && (
          <>
            <Filtering showAll={showAll} setShowAll={setShowAll} />
            <Todos
              todos={todos}
              showAll={showAll}
              changeTodo={handleChangeTodo}
            />
            <hr />
          </>
        )}
        <NewToDoForm addTodo={handleAddTodo} />
      </Box>
    </Paper>
  );
};
