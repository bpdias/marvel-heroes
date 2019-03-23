import React from 'react';
import { Route, Switch } from "react-router-dom";
import Heroes from './containers/heroes/Heroes';
import Details from './containers/details/Details';

const SetupRoutes = () => (
  <Switch>
    <Route exact path="/" component={Heroes} /> 
    <Route exact path="/character/:id" component={Details} />
  </Switch>
);

export default SetupRoutes;