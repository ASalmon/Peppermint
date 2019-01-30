import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Top5Table from '../Top5Table';

const styles = () => ({
  root: {
    flexGrow: 1,
  },
});

function Grid3Col(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12} md={4}>
          <Top5Table title="Top Performing Stores" />
        </Grid>
        <Grid item xs={12} md={4}>
          <Top5Table title="Top Sale Item By Amount" />
        </Grid>
        <Grid item xs={12} md={4}>
          <Top5Table title="Top Sale Item By Quantity" />
        </Grid>
      </Grid>
    </div>
  );
}

Grid3Col.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
};

Grid3Col.defaultProps = {
  classes: {},
};

export default withStyles(styles)(Grid3Col);
