import React from 'react';
import API from '../../utils/API';
import './style.css';

class RegisterBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      errors: [],
      pwdState: null,
    };
  }

  onUsernameChange(e) {
    this.setState({ username: e.target.value });
    this.clearValidationErr('username');
  }

  onEmailChange(e) {
    this.setState({ email: e.target.value });
    this.clearValidationErr('email');
  }

  onPasswordChange(e) {
    this.setState({ password: e.target.value });
    this.clearValidationErr('password');

    this.setState({ pwdState: 'weak' });
    if (e.target.value.length > 8) {
      this.setState({ pwdState: 'medium' });
    } if (e.target.value.length > 12) {
      this.setState({ pwdState: 'strong' });
    }
  }

  showValidationErr(elm, msg) {
    this.setState(prevState => ({
      errors: [
        ...prevState.errors, {
          elm,
          msg,
        },
      ],
    }));
  }

  // push prevState errors to newArr
  clearValidationErr(elm) {
    this.setState((prevState) => {
      const newArr = [];
      for (let err of prevState.errors) {
        if (elm !== err.elm) {
          newArr.push(err);
        }
      }
      return { errors: newArr };
    });
  }

  submitRegister(e) {
    e.preventDefault();
    console.log(this.state);

    if (this.state.username === '') {
      this.showValidationErr('username', 'Username cannot be blank!');
    }
    if (this.state.email === '') {
      this.showValidationErr('email', 'Email cannot be blank!');
    }
    if (this.state.password === '') {
      this.showValidationErr('password', 'Password cannot be blank!');
    }
    if (this.state.username !== '' && this.state.email !== '' && this.state.password !== '') {
      console.log('user/password/email not blank, add new user to DB');

      const userData = {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
      };

      API.register(userData)
        .then((res) => {
          if (res.data.status === 'error') {
            throw new Error(res.data.message);
          }
          // window.location.href = '/login';
        });
    }
  } // end submitRegister

  render() {
    let usernameErr = null;
    let passwordErr = null;
    let emailErr = null;

    for (let err of this.state.errors) {
      if (err.elm === 'username') {
        usernameErr = err.msg;
      }
      if (err.elm === 'password') {
        passwordErr = err.msg;
      }
      if (err.elm === 'email') {
        emailErr = err.msg;
      }
    }

    // password strength indicator - begin in off position
    let pwdWeak = false;
    let pwdMedium = false;
    let pwdStrong = false;

    if (this.state.pwdState === 'weak') {
      pwdWeak = true;
    } else if (this.state.pwdState === 'medium') {
      pwdWeak = true;
      pwdMedium = true;
    } else if (this.state.pwdState === 'strong') {
      pwdWeak = true;
      pwdMedium = true;
      pwdStrong = true;
    }

    return (
      <div className="inner-container">
        <div className="header">
          Register
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
              {usernameErr ? usernameErr : ''}
            </small>
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              className="login-input"
              placeholder="Email"
              onChange={this
                .onEmailChange
                .bind(this)
              }
            />
            <small className="danger-error">
              {emailErr ? emailErr : ''}
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
              {passwordErr ? passwordErr : ''}
            </small>

            {this.state.password &&
              <div className="password-state">
                <div className={'pwd pwd-weak ' + (pwdWeak ? 'show': '')}></div>
                <div className={'pwd pwd-medium ' + (pwdMedium ? 'show': '')}></div>
                <div className={'pwd pwd-strong ' + (pwdStrong ? 'show': '')}></div>
              </div>
            }

          </div>

          <button
            type="button"
            className="login-btn"
            onClick={this
              .submitRegister
              .bind(this)}
          >
            Register
          </button>

        </div>
      </div>

    );
  }
}

export default RegisterBox;
