import Nav from './components/Nav/Nav';
import "./App.css";
import routes from './routes/routes';
import React, {useEffect,} from 'react';
import axios from 'axios';
import { loginUser }from './redux/userReducer';
import { useDispatch} from 'react-redux';

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

