import Nav from './components/Nav/Nav';
import About from './components/About/About';
import "./App.css";
import routes from './routes/routes';
import { withRouter } from "react-router-dom";
import React from "react";

function App() {
  return (
    <div className="App">
      < Nav/>
      {routes}
      < About/>
    </div>
  );
}

export default withRouter(App);
