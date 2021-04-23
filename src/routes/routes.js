import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from '../components/About/About';
import User from '../components/User/User';
import Admin from '../components/Admin/Admin';
import Emailer from '../components/Emailer/Emailer';



export default (
  <Switch>
    <Route exact path="/" component={About} />
    <Route path="/user/" component={User} />
    <Route path="/admin/" component={Admin} />
    <Route path="/email/" component={Emailer} />
  </Switch>
);