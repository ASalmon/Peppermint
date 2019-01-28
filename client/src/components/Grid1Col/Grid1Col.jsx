import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Table5Table from '../Top5Table';

const styles = () => ({
  root: {
    flexGrow: 1,
  },
});

function Grid1Col(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={6}>
          <Table5Table />
        </Grid>
        <Grid item xs={6}>
          <Table5Table />
        </Grid>
      </Grid>
    </div>
  );
}

Grid1Col.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
};

Grid1Col.defaultProps = {
  classes: {},
};

export default withStyles(styles)(Grid1Col);
