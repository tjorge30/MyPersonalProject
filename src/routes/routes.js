import { Route } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';


<Switch>
  <Route exact path="/" component={Home} />
  <Route path="/about" component={About} />
  <Route path="/about/contact" component={Contact} />
</Switch>