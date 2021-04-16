import React from "react";
import JessicaB from "../../assets/images/JessicaB.jpeg";
import MoonDesc from "../../assets/images/moonPhases.png";
import Nav from '../Nav/Nav';
import { connect } from 'react-redux';
import "./About.css";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      showReg: "false",
      showLogin: "true",
    };
  }
  regForm = () => {
    if (this.state.showReg === "true") {
      this.setState({ showReg: "false" });
    } else {
      this.setState({ showReg: "true" });
    }
  };

  loginForm = () => {
    if (this.state.showLogin === "true") {
      this.setState({ showLogin: "false" });
    } else {
      this.setState({ showLogin: "true" });
    }
  };

  render() {
      console.log(this.props)

    return (
      <div>
        <div className={this.state.showReg}>
          <div className="regInputArea">
            <div className="regForm">
              <form>
                <input
                  autocomplete="on"
                  type="text"
                  placeholder="*name"
                  required
                ></input>
                <br />
                <input
                  autocomplete="on"
                  type="email"
                  placeholder="*email"
                  required
                ></input>
                <br />
                <input
                  autocomplete="on"
                  type="tel"
                  placeholder="(999)999-9999"
                ></input>
                <br />
                <input
                  autocomplete="on"
                  type="password"
                  placeholder="*set password"
                  required
                ></input>
                <br />
              </form>

              <button>register</button>
              <button onClick={this.regForm}>cancel</button>
            </div>
          </div>
        </div>
        <Nav />
        <div className="row1">
          <div className="r1Content">
            <div className="authArea">
                {/* once login is sucessful need to set this.showLogin to false */}
              <div className={this.showLogin}>
                <form>
                  <input
                    autocomplete="on"
                    type="email"
                    placeholder="email"
                    required
                  ></input>
                  <br />
                  <input
                    autocomplete="on"
                    type="password"
                    placeholder="password"
                    required
                  ></input>
                  <br />
                  <button type="submit">login</button>
                  <br />
                </form>
                <button onClick={this.regForm}>register</button>
                <br />
              </div>
            </div>
          </div>
          <h1>...it's just a phase</h1>
        </div>

        <h2>Taking the First Step Towards Positive Change</h2>
        <div className="row2">
          <div className="r2Column1">
            <p>
              Thank you for visiting my site! My name is Jessica and I am a life
              coach who specializes in helping women through life events and big
              transitions with the added help of Reiki.
            </p>
            <img alt="Jessica B" src={JessicaB} />
            <p>
              I will help you reach your goals through Reki and calling on the
              energy of the moon to assist you in bringing healthy changes into
              your life. In many indigenous traditions, the moon is the leader
              of the feminine life and was placed in the sky to watch over the
              children of the Earth.
              <br />
              <br />
              Creating healthy habits typically takes 15 days. This is the same
              amount of time the cycle of the moon takes. Coincidence? I think
              not! The moon has an influence on the cycles and natural rhythms
              of life, Everything that moves is to some degree pulled by the
              moon.
            </p>
            <button
              onClick={(event) =>
                window.open("https://lunarempowered.life/", "_blank")
              }
            >
              Learn More
            </button>
          </div>
        </div>

        <h2>Quick Guide to Setting New Moon Intentions</h2>
        <div className="row3">
          <img alt="Moon Phases" src={MoonDesc} />
        </div>
        <h2>How Do I Do This?</h2>
        <div className="row4">
          <div className="r4Column1">
            <p>
              The mere mention of the word "change" may cause some to feel
              uneasy. We often find ourselves resisting change, perhaps because
              of the perceived risk or fear associated with it. This resistance
              can be seen in the student who always finds herself
              procrastinating, the 10-year smoker who keeps having "one more,"
              or the overly stressed boss who continues to add to her plate.
              It’s an interesting predicament we put ourselves in. So why do we
              have such a hard time initiating or following through with our
              desire to change? A lot of times it is because we have a lack of a
              support system. This is where I will be able to help you!
            </p>
            <h2>Step 1.</h2>
            <h2>Step 2.</h2>
            <h2>Step 3.</h2>
            <button onClick={this.regForm}>Register</button>
          </div>
        </div>
      </div>
    )
  }
};

const mapStateToProps = (reduxState) => {
    reduxState;
}

export default connect(mapStateToProps)(App);