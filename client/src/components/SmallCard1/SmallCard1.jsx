import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import PieChart from '../PieChart';

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

const myOptions = {
  series: [44, 55, 13, 33],
  labels: ['Duluth', 'Macon', 'Atlanta', 'Norcross'],
};

function SmallCard(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <Card className={classes.card}>
        <CardHeader title="Sales by Store" subheader="Last 6 Months" />
        <CardContent>
          <PieChart className={classes.center} myOptions={myOptions} />
        </CardContent>
      </Card>
    </React.Fragment>
  );
}

SmallCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SmallCard);
