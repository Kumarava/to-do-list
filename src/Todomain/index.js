import React, { useCallback } from "react";
import { Todos } from "../Todos";
import { NewToDoForm } from "../NewToDoForm";
import { Filtering } from "../Filtering";
import { Paper, Box } from "@material-ui/core";
import { useParams } from "react-router-dom";

export const Todomain = () => {
  const [showAll, setShowAll] = React.useState(false);
  const [todos, setTodos] = React.useState([]);
  let { userId } = useParams();

  const fetchTodos = useCallback(async () => {
    const response = await fetch(
      `https://merey-todo-list.herokuapp.com/api/users/${userId}/todos`
    );
    const todosData = await response.json();
    setTodos(todosData);
  }, [userId]);

  React.useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  const handleAddTodo = async (todoTitle) => {
    const response = await fetch(
      `https://merey-todo-list.herokuapp.com/api/todos/${userId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: todoTitle }),
      }
    );

    const taskData = await response.json();
    if (!taskData.taskId) alert("Did not added to database");
    else fetchTodos();
  };

  const handleChangeTodo = async (id) => {
    const item = todos.find((todo) => id === todo._id);
    const response = await fetch(
      `https://merey-todo-list.herokuapp.com/api/todos/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ done: !item.done }),
      }
    );

    const taskData = await response.json();
    if (!taskData.taskId) alert("Property wasn't changed on database");
    else fetchTodos();
  };

  const handleDelete = async (taskId) => {
    const response = await fetch(
      `https://merey-todo-list.herokuapp.com/api/todos/${taskId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const taskData = await response.json();
    if (!taskData.taskId) alert("Property wasn't deleted");
    else fetchTodos();
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
              deleteTodo={handleDelete}
            />
            <hr />
          </>
        )}
        <NewToDoForm addTodo={handleAddTodo} />
      </Box>
    </Paper>
  );
};
