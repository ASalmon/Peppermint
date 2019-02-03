import React from 'react';
import './style.css';
import LoginBox from '../LoginBox';
import RegisterBox from '../RegisterBox';
import FadeTransition from '../FadeTransition';

// const LoginController = () => {

// this is the main controlling file for Simple Login attempt
// start out with LoginBox open, not RegisterBox
class LoginController extends React.Component {
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

  render() {
    return (
      <React.Fragment>
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
      </React.Fragment>
    );
  }
}

export default LoginController;
