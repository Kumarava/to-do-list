import React from "react";
import "./style.css";
import Checkbox from "@material-ui/core/Checkbox";
import {
  ListItem,
  List,
  ListItemSecondaryAction,
  IconButton,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { green } from "@material-ui/core/colors";

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
          <ListItem
            key={todo._id}
            onClick={() => handleChange(todo._id)}
            button
          >
            <ListItemIcon>
              <Checkbox
                edge="start"
                style={{ color: green[500] }}
                checked={todo.done}
                tabIndex={-1}
                disableRipple
              />
            </ListItemIcon>
            <ListItemText primary={todo.title} />
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
