import React, { useState } from "react";
import JessicaB from "../../assets/images/JessicaB.jpeg";
import MoonDesc from "../../assets/images/moonPhases.png";
import Nav from "../Nav/Nav";
import { connect } from "react-redux";
import { loginUser } from "../../redux/userReducer";
import axios from "axios";
import "./About.css";

function About(props) {


  const [showReg, setShowReg] = useState("false");
  const [showLogin, setShowLogin] = useState("true");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [admin, setAdmin] = useState(false);

  
  
  const regForm = () => {
    if (showReg === "true") {
      setShowReg("false");
    } else {
      setShowReg("true");
    }
  };

  const loginForm = () => {
    if (props.isLoggedIn === true) {
      setShowLogin("false");
    } else {
      setShowLogin("true");
    }
  };

  const handelRegSubmit = (e) => {
    e.preventDefault();
    const body = {
      name,
      email,
      phone,
      password,
      admin,
    };
    axios
      .post("/auth/register", body)
      .then((res) => {
        props.loginUser(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  const handelLoginSubmit = (e) => {
    e.preventDefault();
    const body = {
      email,
      password,
    }
    axios
      .post("/auth/login", body)
      .then((res) => {
        props.loginUser(res.data);
        res.data.admin
          ? props.history.push("/admin/")
          : props.history.push("/user/");
      })
      .catch((err) => console.log(err));
  }

  return (
    // User registration form with conditional rendering//
    <div>
      <div className={showReg}>
        <div className="regInputArea">
          <div className="regForm">
            <form>
              <input
                name="name"
                value={name}
                autoComplete="on"
                placeholder="*name"
                onChange={(e) => setName(e.target.value)}
                required
              ></input>
              <br />
              <input
                name="email"
                value={email}
                autoComplete="on"
                placeholder="*email"
                onChange={(e) => setEmail(e.target.value)}
                required
              ></input>
              <br />
              <input
                name="phone"
                value={phone}
                autoComplete="on"
                placeholder="(999)999-9999"
                onChange={(e) => setPhone(e.target.value)}
              ></input>
              <br />
              <input
                name="password"
                value={password}
                autoComplete="on"
                type="password"
                placeholder="*set password"
                onChange={(e) => setPassword(e.target.value)}
                required
              ></input>
              <br />
            </form>
            <button onClick={handelRegSubmit}>register</button>
            <button onClick={regForm}>cancel</button>
          </div>
        </div>
      </div>

      {/* top of the view */}
      <Nav />
      <div className="row1">
        <h1>...it's just a phase</h1>
        <div className={showLogin}>
          {/* once login is sucessful need to set this.showLogin to false */}
          <div className="r1Content">
            <div className="authArea">
              <form onSubmit={handelLoginSubmit}>
                <input
                  name="email"
                  value={email}
                  placeholder="email"
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
                <br />
                <input
                  name="password"
                  value={password}
                  type="password"
                  placeholder="password"
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
                <br />
                {/* on click user is loged in or get error and the authArea is hidden from view */}
                <button type="submit">login</button>
                <br />
              </form>
              <button onClick={regForm}>register</button>
            </div>
            {/* start of small screen adaptation */}
            <div className='lrg-screen-hide'>
              <h2>Taking the First Step Towards Positive Change</h2>
              <p>
                Thank you for visiting my site! My name is Jessica and I am a life
                coach who specializes in helping women through life events and big
                transitions with the added help of Reiki.
              </p>
              <div className='jessImg'>
                <img  alt="Jessica B" src={JessicaB} />
              </div>
              <p>
                I will help you reach your goals through Reki and calling on the
                energy of the moon to assist you in bringing healthy changes into
                your life. In many indigenous traditions, the moon is the leader of
                the feminine life and was placed in the sky to watch over the
                children of the Earth.
                <br />
                <br />
                Creating healthy habits typically takes 15 days. This is the same
                amount of time the cycle of the moon takes. Coincidence? I think
                not! The moon has an influence on the cycles and natural rhythms of
                life, Everything that moves is to some degree pulled by the moon.
              </p>
              <button
                onClick={(event) =>
                  window.open("https://lunarempowered.life/", "_blank")
                }
              >
                Learn More
              </button>
              <h2>How Do I Start?</h2>
              <p>
                The mere mention of the word "change" may cause some to feel uneasy.
                We often find ourselves resisting change, perhaps because of the
                perceived risk or fear associated with it. This resistance can be
                seen in the student who always finds herself procrastinating, the
                10-year smoker who keeps having "one more," or the overly stressed
                boss who continues to add to her plate. It’s an interesting
                predicament we put ourselves in. So why do we have such a hard time
                initiating or following through with our desire to change? A lot of
                times it is because we have a lack of a support system. This is
                where I will be able to help you!
              </p>
              <button onClick={regForm}>Register</button>
            </div>
            {/* end of small screen adaptation */}
          </div>
        </div>
        
      <div className="row2, sm-screen-hide">
        <h2>Taking the First Step Towards Positive Change</h2>
        <div className="r2Column1">
          <p>
            Thank you for visiting my site! My name is Jessica and I am a life
            coach who specializes in helping women through life events and big
            transitions with the added help of Reiki.
          </p>
          <div className='jessImg'>
            <img  alt="Jessica B" src={JessicaB} />
          </div>
          <p>
            I will help you reach your goals through Reki and calling on the
            energy of the moon to assist you in bringing healthy changes into
            your life. In many indigenous traditions, the moon is the leader of
            the feminine life and was placed in the sky to watch over the
            children of the Earth.
            <br />
            <br />
            Creating healthy habits typically takes 15 days. This is the same
            amount of time the cycle of the moon takes. Coincidence? I think
            not! The moon has an influence on the cycles and natural rhythms of
            life, Everything that moves is to some degree pulled by the moon.
          </p>
          <button onClick={(event) => window.open("https://lunarempowered.life/", "_blank")}>
            Learn More
          </button>
        </div>
      </div>

      <div className='row3, sm-screen-hide'>
        <h2>Quick Guide to Setting New Moon Intentions</h2>
        <img alt="Moon Phases" src={MoonDesc} />
      </div>

      <div className="row4, sm-screen-hide">
        <div className="r4Column1">
          <h2>How Do I Start?</h2>
          <p>
            The mere mention of the word "change" may cause some to feel uneasy.
            We often find ourselves resisting change, perhaps because of the
            perceived risk or fear associated with it. This resistance can be
            seen in the student who always finds herself procrastinating, the
            10-year smoker who keeps having "one more," or the overly stressed
            boss who continues to add to her plate. It’s an interesting
            predicament we put ourselves in. So why do we have such a hard time
            initiating or following through with our desire to change? A lot of
            times it is because we have a lack of a support system. This is
            where I will be able to help you!
          </p>
          <button onClick={regForm}>Register</button>
        </div>
      </div>
    </div>
    </div>
  );
}

const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps, { loginUser })(About);
