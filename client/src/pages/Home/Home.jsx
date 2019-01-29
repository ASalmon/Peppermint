import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import NavBar from '../../components/NavBar';
import Grid2Col from '../../components/Grid2Col';
import Grid3Col from '../../components/Grid3Col';

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

const Home = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <NavBar />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Grid2Col />
        <Grid3Col />
      </main>
    </div>
  );
};

export default withStyles(styles)(Home);
