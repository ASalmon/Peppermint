import React, { Component } from 'react';
import API from '../../utils/API';
import './style.css';

// const styleForInnerContainer = {
//   transition: 'visibility 0.2s ease-out',
// };

// const styleForHeader = {
//   textAlign: 'center',
//   padding: 5,
//   marginBottom: 17,
//   fontFamily: 'Oxygen, sansSerif',
//   fontSize: 22,
//   borderBottom: '2px solid #008ffb',
// };

// const styleForBox = {
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'center',
// };

// const styleForInputGroup = {
//   display: 'flex',
//   flexDirection: 'column',
//   marginTop: 5,
//   marginBottom: 5,
// };

// const styleForLoginInput = {
//   height: '2.1em',
//   borderRadius: 3,
//   border: '1px solid #008ffb',
//   WebkitTransition: 'border 0.4s ease-out',
//   padding: 10,
//   fontFamily: 'Oxygen, sansSerif',
//   fontSize: 19,
//   color: '#3e3e42',
//   background: 'rgba(15, 15, 15, 0.01)',
// };


class LoginBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errors: [],
      pwdState: null,
    };
  }

  onUsernameChange(e) {
    this.setState({ username: e.target.value });
    this.clearValidationErr('username');
  }

  onPasswordChange(e) {
    this.setState({ password: e.target.value });
    this.clearValidationErr('password');
  }

  showValidationErr(elm, msg) {
    this.setState((prevState) => ({
      errors: [
        ...prevState.errors, {
          elm,
          msg
        }
      ]
    }));
  }

  clearValidationErr(elm) {
    this.setState((prevState) => {
      let newArr = [];
      for (let err of prevState.errors) {
        if (elm != err.elm) {
          newArr.push(err);
        }
      }
      return { errors: newArr };
    });
  }

  submitLogin(e) {
    e.preventDefault();
    console.log(this.state);

    if (this.state.username === '') {
      this.showValidationErr('username', 'Username cannot be blank!');
    }
    if (this.state.password === '') {
      this.showValidationErr('password', 'Password cannot be blank!');
    }
    if (this.state.username !== '' && this.state.password !== '') {
      console.log('user/password not blank, check DB');
      const userData = {
        username: this.state.username,
        password: this.state.password,
      };

      API.login(userData)
        .then((res) => {
          if (res.data.status === 'error') {
            throw new Error(res.data.message);
          }
          console.log(res.data);
          // redirect to Home - Dashboard
          window.location.href = '/dashboard';
        });
    }
  }

  render() {
    let usernameErr = null;
    let passwordErr = null;


    for (let err of this.state.errors) {
      if (err.elm === 'username') {
        usernameErr = err.msg;
      }
      if (err.elm === 'password') {
        passwordErr = err.msg;
      }
    }

    return (
      // <div style={styleForInnerContainer}>
      <div className="inner-container">
        {/* <div style={styleForHeader}> */}
        <div className="header">
          Login
        </div>
        {/* <div style={styleForBox}> */}
        <div className="box">
          {/* <div style={styleForInputGroup}> */}
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              // style={styleForLoginInput}
              className="login-input"
              placeholder="Username"
              onChange={this
                .onUsernameChange
                .bind(this)
              }
            />
            <small className="danger-error">
              {usernameErr
                ? usernameErr
                : ''}
            </small>
          </div>

          {/* <div style={styleForInputGroup}> */}
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              // style={styleForLoginInput}
              className="login-input"
              placeholder="Password"
              onChange={this
                .onPasswordChange
                .bind(this)}
            />
            <small className="danger-error">
              {passwordErr
                ? passwordErr
                : ''}
            </small>
          </div>

          <button
            type="button"
            className="login-btn"
            onClick={this
              .submitLogin
              .bind(this)}
          >
           Login
          </button>

        </div>
      </div>
    );
  }
}


export default LoginBox;
