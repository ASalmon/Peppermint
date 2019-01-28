import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Top5Table from '../Top5Table';

const styles = () => ({
  root: {
    flexGrow: 1,
  },
});

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={4}>
          <Top5Table />
        </Grid>
        <Grid item xs={4}>
          <Top5Table />
        </Grid>
        <Grid item xs={4}>
          <Top5Table />
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(CenteredGrid);
