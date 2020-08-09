import React from "react";
import { Todomain } from "../Todomain";
import { Users } from "../Users";
import { Box } from "@material-ui/core";

export let Main = () => {
  return (
    <Box display="flex">
      <Users />
      <Box flexGrow={1}>
        <Todomain />
      </Box>
    </Box>
  );
};
