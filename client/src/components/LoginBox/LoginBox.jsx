import React, { Component } from 'react';
import axios from 'axios';
import API from '../../utils/API';
import './style.css';
import '../../pages/Login/style.css';
const apiBaseUrl = 'http://localhost:3000/api/';

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
    console.log(this.state);

    if (this.state.username === '') {
      this.showValidationErr('username', 'Username Cannot be blank!');
    }
    if (this.state.password === '') {
      this.showValidationErr('password', 'Password Cannot be blank!');
    }
    if (this.state.username !== '' && this.state.password !== '') {
      console.log('user/password not blank, check DB');
      // const userData = {
      //   username: this.state.username,
      //   password: this.state.password,
      // };
      // ALTON/KEVIN? which way?
      // 1.
      // API.getUser(userData)
      //   .then(res => {
      //     if (res.data.status === 'error') {
      //       throw new Error(res.data.message);
      //     }
      //   }
      // if user/password exist in DB - go to Dashboard
      // if user/password do not exist - return to Login
      //  send error message Username/Password do not exist, Please Register
      // end 1.
      //
      // 2. OR this way?
      // axios.get(apiBaseUrl + 'login', userData)
      //   .then(function (response) {
      //     console.log(response);
      //     if (response.data.code == 200) {
      //       console.log('Login successfull');
      //       // I think this is where we should go to our Home - Dashboard page

      //     } else if (response.data.code == 204) {
      //       console.log('Username and password do not match');
      //       //  alert(response.data.success)}
      //     } else {
      //       console.log('Username does not exist');
      //       //  alert('Username does not exist');
      //     }
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //   });
      // }
      //

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
      <div className="inner-container">
        {/* <Icon>star</Icon> */}
        <div className="header">
          Login
        </div>
        <div className="box">

          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
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

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
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
