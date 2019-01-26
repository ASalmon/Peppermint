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

function SmallCard(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <Card className={classes.card}>
        <CardHeader title="Company Sales" subheader="Last 6 Months" />
        <CardContent>
          <LineChart className={classes.center} />
        </CardContent>
      </Card>
    </React.Fragment>
  );
}

SmallCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SmallCard);
