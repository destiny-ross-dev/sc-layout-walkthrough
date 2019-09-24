import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./pages/landing";

const RootRouter = (
  <Switch>
    <Route exact path="/" render={() => <Landing />} />
  </Switch>
);

export default RootRouter;
