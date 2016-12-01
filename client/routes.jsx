import React from "react";
import { Route, IndexRoute } from "react-router";
import { Home } from "./components/home";
import { ElectrodeTestComponent } from "electrode-test-component-54321";

export const routes = (
  <Route path="/" component={Home}>
    <IndexRoute component={ElectrodeTestComponent}/>
    <Route path="/invite" component={ElectrodeTestComponent}/>
  </Route>
);
