import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import "./style.css";
import { Box } from "@material-ui/core";

export const Header = () => {
  return (
    <header className="App-header">
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            color="inherit"
            component={Link}
            to="/"
            className="todolist"
          >
            Todo-list
          </Typography>
          <Box flexGrow={1} display="flex" justifyContent="flex-end">
            <Button color="inherit" component={Link} to="/about">
              About
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </header>
  );
};
