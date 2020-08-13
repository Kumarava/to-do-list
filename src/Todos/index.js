import React from "react";
import "./style.css";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import {
  ListItem,
  List,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

export const Todos = ({ showAll, todos, changeTodo, deleteTodo }) => {
  const handleChange = (id) => {
    changeTodo(id);
  };

  return (
    <List className="to-do-list">
      {todos.map((todo) => {
        if (!showAll && todo.done) {
          return null;
        }
        return (
          <ListItem key={todo._id}>
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
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => deleteTodo(todo._id)}
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
};
