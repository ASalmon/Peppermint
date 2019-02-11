import {
  DirectionsBike, Equalizer, Settings, Event,
} from '@material-ui/icons';
import React, { Component } from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Peppermint from '../../peppermint.jpg';
import bikeCartoon from '../../bikeCartoon.jpg';
import { loginUser, registerUser } from '../../actions/authActions';

const styles = {
  centered: {
    display: 'block',
    textAlign: 'center',
    fontFamily: 'Oxygen, sansSerif',
    fontSize: 16,
    position: 'relative',
    top: '50%',
    transform: 'translateY(-50%)',
  },
  loginBtn: {
    '&:hover': {
      backgroundColor: '#e6f2fc',
    },
    borderRadius: 25,
    fontFamily: 'Oxygen, sansSerif',
    fontSize: 15,
    fontWeight: 'bold',
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 15,
    paddingRight: 15,
    color: '#008ffb',
    backgroundColor: 'white',
    border: '1px solid #008ffb',
    outline: 'none',
    cursor: 'pointer',
  },
  input: {
    boxSizing: 'border-box',
    display: 'inline',
    lineHeight: 2.2,
    width: 215,
    marginRight: 10,
    fontFamily: 'Oxygen, sansSerif',
    padding: 5,
  },
  userName: {
    fontFamily: 'Oxygen, sansSerif',
    placeholder: 'Username',
    label: 'Username:',
    required: true,
    type: 'text',
    border: '1px solid lightgray',
    color: 'black',
  },
  password: {
    fontFamily: 'Oxygen, sansSerif',
    placeholder: 'Password',
    label: 'Password',
    required: true,
    type: 'text',
    border: '1px solid lightgray',
    color: 'black',
  },
  leftSide: {
    marginBottom: 10,
    backgroundColor: '#008ffb',
    // background: 'linear-gradient(45deg,#008ffb 30%, #ffffff 90%)',
    height: '93vh',
    color: '#ffffff',
    textAlign: 'center',
  },
  leftImage: {
    width: '100%',
    opacity: '0.5',
  },
  spacer: {
    marginBottom: 50,
    marginRight: 20,
  },
  leftText: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Proza Libre, sansSerif',
    position: 'relative',
  },
  rightSide: {
    backgroundColor: '#ffffff',
  },
  rowOne: {
    marginTop: 20,
    textAlign: 'center',
  },
  sectionTwo: {
    display: 'block',
    alignItems: 'left',
    width: '50%',
    margin: '0 auto',
  },
  rowTwo: {
    marginTop: 200,
    textAlign: 'left',
  },
  icon: {
    fontSize: 35,
    marginRight: 10,
    position: 'relative',
    verticalAlign: 'middle',
    bottom: 4,
  },
  bike: {
    fontSize: 40,
    color: '#008ffb',
  },
  rowThree: {
    fontFamily: 'Oxygen, sansSerif',
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'left',
    color: 'black',
  },
  boldText: {
    fontFamily: 'Oxygen, sansSerif',
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  smallText: {
    marginTop: 100,
    fontFamily: 'Oxygen, sansSerif',
    fontSize: 14,
    textAlign: 'left',
  },
  rowFour: {
    marginTop: 15,
    textAlign: 'left',
  },
  signupBtn: {
    '&:hover': {
      backgroundColor: '#026bb9',
      border: '1px solid #026bb9',
    },
    borderRadius: 25,
    fontFamily: 'Oxygen, sansSerif',
    fontSize: 15,
    fontWeight: 'bold',
    paddingTop: 8,
    paddingBottom: 8,
    width: 400,
    color: '#fff',
    backgroundColor: '#008ffb',
    border: '1px solid #008ffb',
    cursor: 'pointer',
    outline: 'none',
  },
  dialogContextText: {
    marginBottom: '20px',
  },
  registerFields: {
    marginBottom: '20px',
  },
  rowFive: {
    textAlign: 'left',
  },
  loginBtn2: {
    '&:hover': {
      backgroundColor: '#e6f2fc',
    },
    marginTop: 15,
    marginBottom: 15,
    borderRadius: 25,
    fontFamily: 'Oxygen, sansSerif',
    fontSize: 15,
    fontWeight: 'bold',
    paddingTop: 8,
    paddingBottom: 8,
    width: 400,
    color: '#008ffb',
    backgroundColor: '#fff',
    border: '1px solid #008ffb',
    cursor: 'pointer',
    outline: 'none',
  },
  footerArea: {
    marginBottom: 10,
    textAlign: 'center',
  },
  footerLogo: {
    marginRight: 5,
    verticalAlign: 'middle',
  },
  footerText: {
    display: 'inline-block',
    color: 'black',
    fontFamily: 'arial, sansSerif',
    fontSize: 12,
  },
  errorText: {
    color: 'red',
  },
};

class Login extends Component {
  state = {
    username: '',
    password: '',
    password2: '',
    email: '',
    open: false,
    errors: {},
  };

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }


  handleUserInput = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleTopLoginBtn = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    const { history } = this.props;

    const userData = {
      username,
      password,
    };

    const { loginUser: _loginUser } = this.props;
    _loginUser(userData, history);
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleRegister = (event) => {
    event.preventDefault();
    const {
      username,
      email,
      password,
      password2,
    } = this.state;

    const newUser = {
      username,
      email,
      password,
      password2,
    };


    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { classes } = this.props;
    const { error, open } = this.state;
    return (
      <div className={classes.root}>
        <Grid className={classes.leftSide} container spacing={24}>
          <Grid item xs={12} md={6}>
            <div className={classes.centered}>
              <div className={classes.spacer}>
                <Equalizer className={classes.icon} />
                <span className={classes.leftText}>
                  Quickly Interpret Sales Data.
                </span>
              </div>
              <div className={classes.spacer}>
                <Event className={classes.icon} />
                <span className={classes.leftText}>
                  View Upcoming Sales Events.
                </span>
              </div>
              <div className={classes.spacer}>
                <Settings className={classes.icon} />
                <span className={classes.leftText}>
                  Customize to Fit Your Needs.
                </span>
              </div>
              <img className={classes.bikeCartoon} src={bikeCartoon} alt="bike" />
            </div>
          </Grid>
          <Grid className={classes.rightSide} item xs={12} md={6}>
            <section className={classes.rowOne}>
              <input
                type="text"
                name="username"
                className={classNames(classes.input, classes.userName)}
                autoComplete="off"
                placeholder="Username"
                onChange={this.handleUserInput}
              />
              <input
                type="password"
                name="password"
                className={classNames(classes.input, classes.password)}
                placeholder="Password"
                onChange={this.handleUserInput}
              />
              <button
                type="submit"
                variant="outlined"
                color="#008ffb"
                className={classes.loginBtn}
                onClick={this.handleTopLoginBtn}
              >
                Log in
              </button>
              {error ? <p className={classes.errorText}>{error}</p> : null}
            </section>
            <section className={classes.sectionTwo}>
              <div className={classes.rowTwo}>
                <DirectionsBike
                  className={classNames(classes.icon, classes.bike)}
                  color="disabled"
                />
              </div>
              <div className={classes.rowThree}>
                <div className={classes.boldText}>Handlebars Express</div>
                <div className={classes.smallText}>Join Peppermint today.</div>
              </div>
              <div className={classes.rowFour}>
                <button
                  className={classes.signupBtn}
                  type="submit"
                  variant="filled"
                  color="primary"
                  onClick={this.handleClickOpen}
                >
                  Sign up
                </button>
                <Dialog
                  open={open}
                  onClose={this.handleClose}
                  aria-labelledby="form-dialog-title"
                >
                  <DialogTitle id="form-dialog-title">Register</DialogTitle>
                  <DialogContent>
                    <DialogContentText className={classes.dialogContextText}>
                      Welcome to Handlebars Express. To get started, please
                      enter your user name, email, and password.
                    </DialogContentText>
                    <TextField
                      autoFocus
                      id="username"
                      name="username"
                      label="User Name"
                      type="text"
                      fullWidth
                      onChange={this.handleUserInput}
                      className={classes.registerFields}
                    />
                    <TextField
                      id="email"
                      name="email"
                      label="Email Address"
                      type="email"
                      fullWidth
                      onChange={this.handleUserInput}
                      className={classes.registerFields}
                    />
                    <TextField
                      id="password"
                      name="password"
                      label="Enter Password"
                      type="password"
                      fullWidth
                      onChange={this.handleUserInput}
                      className={classes.registerFields}
                    />
                    <TextField
                      id="password2"
                      name="password2"
                      label="Re-enter Password"
                      type="password"
                      fullWidth
                      onChange={this.handleUserInput}
                      className={classes.registerFields}
                    />
                    {
                      this.state.error ? (
                        <p
                          className={classes.errorText}
                        >
                          {this.state.error}
                        </p>
                      )
                        : null
                    }
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                      Cancel
                    </Button>
                    <Button onClick={this.handleRegister} color="primary">
                      Register
                    </Button>
                  </DialogActions>
                </Dialog>
              </div>
              <div className={classes.rowFive}>
                <button
                  className={classes.loginBtn2}
                  type="submit"
                  variant="outlined"
                  color="primary"
                >
                  Log in
                </button>
              </div>
            </section>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.footerArea}>
            <img className={classes.footerLogo} src={Peppermint} alt="logo" />
            <p className={classes.footerText}>Powered by Peppermint © 2019</p>
          </div>
        </Grid>
      </div>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
  loginUser: PropTypes.func.isRequired,
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.shape(PropTypes.object),
  history: PropTypes.shape(PropTypes.array),
};

Login.defaultProps = {
  classes: {},
  auth: {},
  history: [],
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
});

export default compose(
  withStyles(styles, {
    name: 'Login',
  }),
  connect(
    mapStateToProps,
    {
      loginUser,
      registerUser,
    },
  ),
)(Login);
