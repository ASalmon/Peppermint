import React, { Fragment } from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import NavBar from '../../components/NavBar';
import GridMiddle from '../../components/GridMiddle';
import GridTop from '../../components/GridTop';
import GridBottom from '../../components/GridBottom';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: '100vh',
    overflow: 'auto',
  },
});

const Dashboard = (props) => {
  const {
    classes,
    isAuthenticated,
  } = props;

  return (
    <div className={classes.root}>
      {
        isAuthenticated ? (
          <Fragment>
            <NavBar />
            <main className={classes.content}>
              <div className={classes.appBarSpacer} />
              <GridTop />
              <GridMiddle />
              <GridBottom />
            </main>
          </Fragment>
        ) : window.location.href = '/'
      }
    </div>
  );
};

Dashboard.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
  isAuthenticated: PropTypes.bool,
};

Dashboard.defaultProps = {
  classes: {},
  isAuthenticated: false,
};


const mapStateToProps = state => ({
  isAuthenticated: state.authentication.isAuthenticated,
});

export default compose(
  withStyles(styles, {
    name: 'Dashboard',
  }),
  connect(
    mapStateToProps,
  ),
)(Dashboard);
