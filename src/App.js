import Nav from './components/Nav/Nav';
import "./App.css";
import routes from './routes/routes';
import { withRouter } from "react-router-dom";
import React from "react";

function App() {
  return (
    <div className="App">
      < Nav/>
      {routes}
    </div>
  );
}

export default withRouter(App);
