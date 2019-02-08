import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import './style.css';
// CssBaseline sets the project margins to zero
// but I must not be using it correctly ???
// I still get 8px on left margin of body
// body is only thing still left in css file
// import { CssBaseline } from '@material-ui/core/CssBaseline';
import LoginLeft from '../../components/LoginLeft';
import LoginHeader from '../../components/LoginHeader';
import LoginController from '../../components/LoginController';
import LoginFooter from '../../components/LoginFooter';


const styles = {
  // body: {
  //   margin: 50,
  //   boxSizing: 'border-box',
  // },
  wrapper: {
    margin: '0 auto',
  },
  leftSide: {
    marginLeft: 0,
    height: '100vh',
    width: '50%',
    position: 'fixed',
    zIndex: 1,
    top: 0,
    overflowX: 'hidden',
    backgroundColor: '#008ffb',
  },
  rightSide: {
    position: 'absolute',
    top: 0,
    left: '50%',
    width: '50%',
    height: '100vh',
    backgroundColor: 'white',
    overflowY: 'scroll',
  },
  centered: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    height: '100vh',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
  },
};

function Login(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <div className={classNames(classes.body, classes.wrapper)}>
        <div className={classes.leftSide}>
          <LoginLeft />
        </div>
        <div className={classes.rightSide}>
          <div className={classes.centered}>
            <LoginHeader />
            <LoginController />
            <LoginFooter />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

// warning in Chrome console relates to classes
// don't know what is wrong???
Login.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
};

Login.defaultProps = {
  classes: {},
};

export default withStyles(styles)(Login);
