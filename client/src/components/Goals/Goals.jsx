import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import LineChart from '../LineChart';

const styles = {
  card: {
    width: '100%',
    height: 500,
  },
  center: {
    margin: '0 auto',
    textAlign: 'center',
  },
};

function Goals(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <Card className={classes.card}>
        <CardHeader title="Goals" subheader="Last 6 Months" />
        <CardContent>
          <LineChart className={classes.center} />
        </CardContent>
      </Card>
    </React.Fragment>
  );
}

Goals.propTypes = {
  classes: PropTypes.arrayOf(PropTypes.object),
};

Goals.defaultProps = {
  classes: {},
};

export default withStyles(styles)(Goals);
