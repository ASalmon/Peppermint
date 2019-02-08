import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import {
  DirectionsBike, Equalizer, Settings, Event,
} from '@material-ui/icons';
import Peppermint from '../../peppermint.jpg';


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
    background: 'linear-gradient(45deg,#008ffb 30%, #ffffff 90%)',
    // backgroundImage: 'url(../../bicycle1839005.jpg)',
    // backgroundRepeat: 'no-repeat',
    // opacity: 0.8,
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
    // textShadow: '2px 2px #000000',
    // fontFamily: 'Nunito Sans, sansSerif',
    // fontFamily: 'Gentium Basic, serif',
    // fontFamily: 'Josefin Sans, sansSerif',
    // fontFamily: 'Nunito Sans, sansSerif',
    // fontFamily: 'Overpass, sansSerif',
    // fontFamily: 'Prosto One, cursive',
    // fontFamily: 'Reem Kufi, sansSerif',
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
    marginLeft: '33%',
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
};

function LoginNew(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      {/* <div className={classes.topText}>Peppermint</div> */}
      <Grid className={classes.leftSide} container spacing={24}>
        <Grid item xs={12} md={6}>
          <div className={classes.centered}>
            <div className={classes.spacer}>
              <Equalizer className={classes.icon} />
              <span className={classes.leftText}>Quickly Interpret Sales Data.</span>
            </div>
            <div className={classes.spacer}>
              <Event className={classes.icon} />
              <span className={classes.leftText}>View Upcoming Sales Events.</span>
            </div>
            <div className={classes.spacer}>
              <Settings className={classes.icon} />
              <span className={classes.leftText}>Customize to Fit Your Needs.</span>
            </div>
          </div>
        </Grid>
        <Grid className={classes.rightSide} item xs={12} md={6}>
          <section className={classes.rowOne}>
            <input
              type="text"
              name="username"
              className={classNames(
                classes.input,
                classes.userName,
              )}
              placeholder="Username"
            />
            <input
              type="text"
              name="password"
              className={classNames(
                classes.input,
                classes.password,
              )}
              placeholder="Password"
            />
            <button type="submit" variant="outlined" color="#008ffb" className={classes.loginBtn}>
              Log in
            </button>
          </section>
          <section className={classes.sectionTwo}>
            <div className={classes.rowTwo}>
              <DirectionsBike
                className={classNames(
                  classes.icon,
                  classes.bike,
                )}
                color="disabled"
              />
            </div>
            <div className={classes.rowThree}>
              <div className={classes.boldText}>
              Handlebars Express
              </div>
              <div className={classes.smallText}>
              Join Peppermint today.
              </div>
            </div>
            <div className={classes.rowFour}>
              <button className={classes.signupBtn} type="submit" variant="filled" color="primary">
                Sign up
              </button>
            </div>
            <div className={classes.rowFive}>
              <button className={classes.loginBtn2} type="submit" variant="outlined" color="primary">
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

LoginNew.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
};

LoginNew.defaultProps = {
  classes: {},
};


export default withStyles(styles)(LoginNew);
