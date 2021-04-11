import { Route, Switch } from 'react-router-dom';
import About from '../components/About/About';
import { useReducer } from 'react';



export default (
  <Switch>
    <Route exact path="/" component={Authentication} />
    <Route path="/about" component={About} />
    <Route path="/user" component={User} />
    <Route path="/admin" component={Admin} />
  </Switch>
);