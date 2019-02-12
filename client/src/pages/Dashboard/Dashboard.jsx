import React, { Fragment } from 'react';
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
  } = props;

  return (
    <div className={classes.root}>
      {
        <Fragment>
          <NavBar />
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <GridTop />
            <GridMiddle />
            <GridBottom />
          </main>
        </Fragment>
      }
    </div>
  );
};

Dashboard.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
};

Dashboard.defaultProps = {
  classes: {},
};

export default withStyles(styles)(Dashboard);
