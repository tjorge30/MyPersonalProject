import Nav from './components/Nav/Nav';
import "./App.css";
import routes from './routes/routes';
import React, {useState, useEffect,} from 'react';
import axios from 'axios';
import userReducer from './redux/userReducer';
import { loginUser }from './redux/userReducer';
import { useDispatch, useSelector } from 'react-redux';

function App (props) {
  const dispatch = useDispatch()

  useEffect (()  => {
    axios
    .get('/auth/getSession')
      .then(res => {
       dispatch(loginUser(res.data));
      })
      .catch(err => console.log(err));
    },)

    return (
      <div className="App">
        < Nav/>
        {routes}
      </div>
    );
  }

export default App;

