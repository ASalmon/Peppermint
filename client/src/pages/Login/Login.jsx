import React from 'react';
import './style.css';
import classNames from 'classnames';
import LoginBox from '../../components/LoginBox';
import RegisterBox from '../../components/RegisterBox';
import FadeTransition from '../../components/FadeTransition';
import Peppermint from '../../peppermint.jpg';
import Bike from '../../joao.jpg';


// this is the main controlling file for Simple Login attempt
// start out with LoginBox open, not RegisterBox
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoginOpen: true,
      isRegisterOpen: false,
    };
  }

  showLoginBox() {
    this.setState({ isLoginOpen: true, isRegisterOpen: false });
  }

  showRegisterBox() {
    this.setState({ isRegisterOpen: true, isLoginOpen: false });
  }

  // render the two controllers (Login and Register)
  // depending on which state is true, isLoginOpen, isRegisterOpen
  // show that component - LoginBox or RegisterBox
  render() {
    return (
      // <div className={classNames(style.split, style.left)}>
      //   <img id="image2" src="../../../../public/assets/images/handlebar-banner.jpg" alt="bike2" width="100" />
      //     <div className="centered">
      //       <h2 id="image-caption">Peppermint Sales Dashboard</h2>
      //       <h2 id="image-caption2">for Handlebars Express</h2>
      //       <p className="left-text">Quickly Interpret Sales Data</p>
      //       <p className="left-text">View Upcoming Sales Events</p>
      //       <p className="left-text">Customize to Fit Your Needs</p>
      //     </div>
      //  </div>
      <div id="background">
        <div className="right">
          <div className="centered">
            <img id="right-image" src={Bike} alt="bike" />
            <h1 id="right-text">HANDLEBARS EXPRESS</h1>
            <p id="right-subtext">sales dashboard</p>
                <div className="root-container">
                  <div className="box-controller">
                    <div
                      className={"controller " + (this.state.isLoginOpen
                      ? "selected-controller"
                      : "")}
                      onClick={this
                      .showLoginBox
                      .bind(this)}>
                      Login
                    </div>
                    <div
                      className={"controller " + (this.state.isRegisterOpen
                      ? "selected-controller"
                      : "")}
                      onClick={this
                        .showRegisterBox
                        .bind(this)}>
                      Register
                    </div>
                  </div>
                  <FadeTransition isOpen={this.state.isLoginOpen} duration={25}>
                    <div className="box-container">
                      <LoginBox />
                    </div>
                  </FadeTransition>
                  <FadeTransition isOpen={this.state.isRegisterOpen} duration={25}>
                    <div className="box-container">
                      <RegisterBox />
                    </div>
                  </FadeTransition>
                </div>
            <div id="footer-area">
              <img id="logo" src={Peppermint} alt="logo" />
              <p id="footer-text">Powered by Peppermint © 2019</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
