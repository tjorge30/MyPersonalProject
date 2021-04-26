import React, {useState, useEffect,} from 'react';
import Nav from "../Nav/Nav";
import "./User.css";
import axios from 'axios';
import { connect } from "react-redux";
import { loginUser }from '../../redux/userReducer';
import { bindActionCreators } from 'redux';

function User (props){
const {first_name, email, phone, sign_id} = props.userReducer.user;

const [isLoggedIn, setIsLoggedIn] = useState(false)
const [moonSigns, setMoonSings] = useState([])
const [signMeaning, setSignMeaning] = useState('')
const [signReading, setSignReading] = useState('')
const [nameInput, setNameInput] = useState('')
const [emailInput, setEmailInput] = useState('')
const [phoneInput, setPhoneInput] = useState('')

useEffect(() => {
  axios
  .get("/api/sign")
  .then((res) => {
    setMoonSings(res.data);
  })
  .catch((err) => console.log(err));

  axios
   .get('/auth/getSession')
    .then((res) => {
      console.log(res);
      setIsLoggedIn(true)
    })
    .catch((err) => console.log(err));
    
  
}, [])



const mappedSignNames = moonSigns.map((sign, i) => {
      return (
        <option key={i} value={moonSigns[i].sign_name}>
          {moonSigns[i].sign_name}
        </option>
        
      );
});


const handelSelectedSign = (e) => {
  e.preventDefault();
  for(let i = 0; i < moonSigns.length; i++)
    if(e.target.value === moonSigns[i].sign_name){
      setSignMeaning(moonSigns[i].sign_meaning);
      setSignReading(moonSigns[i].sign_reading)
    }
}

const handelSubmit = (e) => {
  e.preventDefault();
    axios
      .put('/api/user')
        .then(
            alert('your updates have been saved')
        )
        .catch(err => {console.log(err)});  
}

const handelLogOut = () => {
  axios
    .delete('/auth/logout')
      .then(
        setIsLoggedIn(false),
        props.history.push('/')
      )
      .catch(err => {console.log(err)})
}
console.log(props)

    return (
      <div className="userPage">
        <Nav />
        <div className="User">
          <div className="formBox">
            <h1>My Page</h1>
            <form onSubmit={handelSubmit}>
              <input name='name' value={nameInput} placeholder={first_name} onChange={e => setNameInput(e.target.value)}/>
              <input name='email' value={emailInput} placeholder={email} onChange={e => setEmailInput(e.target.value)}/>
              <input name='phone' value={phoneInput} placeholder={phone} onChange={e => setPhoneInput(e.target.value)}/>
              <label>Select your Moon Sign:</label>
              <select
               id="moonSigns"
               name="moonSign"
               onChange={e => {
                 handelSelectedSign(e)
                }}
                >
               {mappedSignNames}
               </select>
              <div className="autoFillBox">
          
                <p>
                Your Sign Meaning:<br/><br/>
                  {signMeaning}
                </p><br/>
                <p>
                Your Tarrot Reading:<br/><br/>
                  {signReading}
                </p>
              </div>

              <div className="bigInputBox">
                <textarea placeholder="set your new moon intentions here" />
                <textarea placeholder="set your full moon release goal here" />
              </div>
              <button type="submit">Save</button>
            </form>
            <button onClick={handelLogOut}>Log Out</button>
          </div>
        </div>
      </div>
    );
  }
const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps, {loginUser})(User);

