import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from '../components/About/About';
import User from '../components/User/User';
import Admin from '../components/Admin/Admin';



export default (
  <Switch>
    <Route exact path="/" component={About} />
    <Route path="/user/:id" component={User} />
    <Route path="/admin/:id" component={Admin} />
  </Switch>
);