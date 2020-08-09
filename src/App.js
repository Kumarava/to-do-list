import React from "react";
import { Header } from "./Header";
import { Switch, Route } from "react-router-dom";
import { About } from "./About";
import { Container, Box } from "@material-ui/core";
import { Main } from "./Main";

function App() {
  return (
    <div className="App">
      <Box mb={2}>
        <Header />
      </Box>
      <Container>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/:userId">
            <Main />
          </Route>
        </Switch>
      </Container>
    </div>
  );
}

export default App;
