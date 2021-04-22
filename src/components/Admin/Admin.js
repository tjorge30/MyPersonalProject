import React from "react";
import Nav from "../Nav/Nav";
import "./Admin.css";
import axios from "axios";

class Admin extends React.Component {
  constructor() {
    super();
    this.state = {
      moonSigns:[]
    }
  }

  componentDidMount() {
    this.getMoonSigns();
    // this.getUserInfo();
  }

  getMoonSigns = () => {
    axios
      .get("/api/sign")
      .then((res) => {
        this.setState({ moonSigns: res.data });
      })
      .catch((err) => console.log("could not load moon signs"));
  };

  handelLogOut = () => {
    axios
      .delete("/auth/logout")
      .then(
        this.props.isLoggedIn
          ? alert("LogOut unsucessful")
          : this.props.history.push("/") || alert("Log out sucessful")
      )
      .catch((err) => {
        console.log(err);
      });
  };

 render() {
    console.log(this.state.moonSigns);
  
    const mappedSignNames = this.state.moonSigns.map((sign, i) => {
      return (
        <option key={i} value={this.state.moonSigns[i].sign_name}>
          {this.state.moonSigns[i].sign_name}
        </option>
      );
    });
    return (
      <div className="adminPage">
        <Nav />
        <div className="Admin">
          <div className="formBox">
            <h1>Admin Page</h1>
            <form>
              <input placeholder="Jessica B" />
              <input placeholder="fakeemail@example.com" />
              <button type="submit">Save</button>
            </form>
            <div className="twoButtons">
              <button>Send Emails</button>
              <button>Send Texts</button>
            </div>
            {/* need to create twelve of these oraclImput forms
              one for each moon sign thinking could do this with javascript*/}
            <div className="oraclInput">
              <form>
              <label for="cars">Select A Moon Sign:</label>
              <select
               id="moonSigns"
               name="moonSign"
               onChange={this.handelSignChange}
               >
               {mappedSignNames}
               </select>
                <textarea placeholder="input the moon signs reading and submit to send it to the users" />
                <button type="submit">Submit</button>
              </form>
              <br/>
            </div>
            <button onClick={this.handelLogOut}>Log Out</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Admin;
