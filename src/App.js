// import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import "./App.css";
// import routes from "./Routes";
import { withRouter } from "react-router-dom";
import React from "react";

function App() {
  return (
    <div className="App">
     {/* < Nav>
     Navigation Bar
     {routes}
     </Nav> */}
     < Home/>
    </div>
  );
}

export default withRouter(App);
