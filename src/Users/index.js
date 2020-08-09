import React from "react";
import { Paper, Box, Tab, Tabs } from "@material-ui/core";
import { Link, useParams } from "react-router-dom";

export const Users = () => {
  let { userId } = useParams();
  const [users, setUsers] = React.useState([]);
  React.useEffect(() => {
    fetchUsers();
  }, []);
  const fetchUsers = async () => {
    const response = await fetch(
      "https://merey-todo-list.herokuapp.com/api/users"
    );

    const usersData = await response.json();
    setUsers(usersData);
  };
  if (!users.length) return <h1>Loading..</h1>;
  return (
    <Box mr={2}>
      <Paper>
        <Tabs orientation="vertical" value={userId}>
          {users.map((user) => (
            <Tab
              label={user.name}
              component={Link}
              to={`/${user._id}`}
              key={user._id}
              value={user._id}
            />
          ))}
        </Tabs>
      </Paper>
    </Box>
  );
};
