import React, { useState, useEffect } from "react";
import Nav from "../Nav/Nav";
import "./Admin.css";
import axios from "axios";

export default function Admin(props) {
  const [moonSigns, setMoonSigns] = useState([]);
  const [signName, setsignName] = useState("");
  const [signReading, setSignReading] = useState("");

  useEffect(() => {
    axios
      .get("/api/sign")
      .then((res) => {
        setMoonSigns(res.data);
      })
      .catch((err) => console.log(err));
    
  }, []);

  const handelReadingUpdate = (e) => {
    e.preventDefault();
    const body = {
      signName,
      signReading,
    };
    axios
      .post("/api/sign", body)
      .then((res) => {
        alert(`${res.data} row(s) were updated`);
      })
      .catch((err) => console.log(err));
  };

  const handelLogOut = () => {

    axios
      .delete("/auth/logout")
      .then(
        props.isLoggedIn ? alert('logout unsucessful') : props.history.push("/"),
        setsignName(""),
        setSignReading("")    
      )
      .catch((err) => {
        console.log(err);
      });
  };

  const mappedSignNames = moonSigns.map((sign, i) => {
    return (
      <option key={i} value={moonSigns[i].sign_name}>
        {moonSigns[i].sign_name}
      </option>
    );
  });

  const getSignReading = () => {
    moonSigns.map((sign, i) => {
      if (signName === moonSigns[i].moonSign_name) {
        setSignReading(moonSigns[i].sign_reading);
      }
    });
  };

  return (
    <div className="adminPage">
      <Nav />
      <div className="Admin">
        <div className="adminFormBox">
          <h1>Admin Page</h1>
          <form>
            <input placeholder="Jessica B" />
            <input placeholder="fakeemail@example.com" />
            <button type="submit">Save</button>
          </form>
          <div className="twoButtons">
            <button onClick={() => props.history.push("/email")}>
              Send Emails
            </button>
          </div>
          <div className="oraclInput">
            <form onSubmit={(e) => handelReadingUpdate(e)}>
              <label>Select A Moon Sign:</label>
              <select
                id="moonSigns"
                name="moonSign"
                value={signName}
                onChange={(e) => setsignName(e.target.value)}
              >
                {mappedSignNames}
              </select>
              <textarea
                name="signReading"
                value={signReading}
                onChange={(e) => setSignReading(e.target.value)}
                placeholder={signReading}
              />
              <button type="submit">Submit</button>
            </form>
          </div>
          <button onClick={handelLogOut}>Log Out</button>
        </div>
      </div>
    </div>
  );
}
