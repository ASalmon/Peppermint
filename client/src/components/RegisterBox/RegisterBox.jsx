import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
// import './style.css';
import API from '../../utils/API';


const styles = {
  innerContainer: {
    transition: 'visibility 0.2s ease-out',
  },
  header: {
    textAlign: 'center',
    padding: 5,
    marginBottom: 17,
    fontFamily: 'Oxygen, sansSerif',
    fontSize: 22,
    borderBottom: '2px solid #008ffb',
  },
  box: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 5,
    marginBottom: 5,
  },
  loginInput: {
    height: '2.1em',
    borderRadius: 3,
    border: '1px solid #008ffb',
    transition: 'border 0.4s ease-out',
    padding: 10,
    fontFamily: 'Oxygen, sansSerif',
    fontSize: 19,
    color: '#3e3e42',
    background: 'rgba(15, 15, 15, 0.01)',
  },
  dangerError: {
    color: '#e74c3c',
    fontSize: 16,
  },
  /* Password */
  passwordState: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
  },
  pwd: {
    height: 6,
    flex: 1,
    visibility: 'hidden',
  },
  pwdWeak: {
    backgroundColor: '#ff4560',
  },
  pwdMedium: {
    backgroundColor: '#008ffb',
  },
  pwdStrong: {
    backgroundColor: '#2ecc71',
  },
  /* show password strength bar */
  show: {
    visibility: 'visible',
  },
  loginBtn: {
    padding: '2px 30px',
    fontSize: 18,
    borderRadius: 3,
    fontFamily: 'Oxygen, sansSerif',
    backgroundColor: 'rgba(15, 15, 15, 0.03)',
    marginTop: 20,
    border: '2px solid #008ffb',
    transition: 'background-color 0.3s ease-out',
    cursor: 'pointer',
  },
};


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

    const { classes } = this.props;
    return (
      <div className={classes.innerContainer}>
        <div className={classes.header}>
          Register
        </div>
        <div className={classes.box}>
          <div className={classes.inputGroup}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              className={classes.loginInput}
              placeholder="Username"
              onChange={this
                .onUsernameChange
                .bind(this)
              }
            />
            <small className={classes.dangerError}>
              {usernameErr ? usernameErr : ''}
            </small>
          </div>

          <div className={classes.inputGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              className={classes.loginInput}
              placeholder="Email"
              onChange={this
                .onEmailChange
                .bind(this)
              }
            />
            <small className={classes.dangerError}>
              {emailErr ? emailErr : ''}
            </small>
          </div>

          <div className={classes.inputGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className={classes.loginInput}
              placeholder="Password"
              onChange={this
                .onPasswordChange
                .bind(this)}
            />
            <small className={classes.dangerError}>
              {passwordErr ? passwordErr : ''}
            </small>

            {this.state.password &&
              <div className={classes.passwordState}>
                <div className={classNames(
                  classes.pwd,
                  classes.pwdWeak + (pwdWeak ? 'show': '')
                )}>
                </div>
                <div className={classNames(
                  classes.pwd,
                  classes.pwdMmedium + (pwdMedium ? 'show': '')
                )}>
                </div>
                <div className={classNames(
                  classes.pwd,
                  classes.pwdStrong + (pwdStrong ? 'show': '')
                )}>
                </div>
              </div>
            }

          </div>

          <button
            type="button"
            className={classes.loginBtn}
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

RegisterBox.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
};

RegisterBox.defaultProps = {
  classes: {},
};

export default withStyles(styles)(RegisterBox);
