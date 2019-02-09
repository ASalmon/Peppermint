import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import PieChart from '../PieChart';
import BarChart from '../BarChart';
import getSalesDistributionByStore from '../../actions/getSalesDistributionByStore';

const styles = () => ({
  root: {
    flexGrow: 1,
  },
  card: {
    width: '100%',
    height: 500,
  },
});

// const xaxis = {
//   categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
// };

const barOptions = {
  chart: {
    id: 'companyGoals',
  },
  plotOptions: {
    bar: {
      columnWidth: '50%',
      endingShape: 'arrow',
    },
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'Jun'],
  },
  series: [
    {
      name: 'Goal',
      type: 'column',
      data: [32, 44, 45, 50, 52, 60],
    },
    {
      name: 'Actual',
      type: 'column',
      data: [30, 40, 47, 50, 49, 55],
    },
  ],
};

class GridMiddle extends Component {
  componentDidMount() {
    const {
      getSalesDistributionByStore: _getSalesDistributionByStore,
    } = this.props;

    _getSalesDistributionByStore();
  }

  render() {
    const { classes, salesDistribution } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12} md={5}>
            <Card className={classes.card}>
              <CardHeader
                title="Sales Distrubtion By Store"
                subheader="Last 6 Months"
              />
              <CardContent>
                {salesDistribution
                && salesDistribution.series
                && salesDistribution.labels
                && salesDistribution.series.length
                && salesDistribution.labels.length ? (
                  <PieChart
                    className={classes.center}
                    pieData={salesDistribution}
                  />
                  ) : (
                    undefined
                  )}
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={7}>
            <Card className={classes.card}>
              <CardHeader
                title="Company Sales Goal"
                subheader="Last 6 Months"
              />
              <CardContent>
                <BarChart barOptions={barOptions} />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

GridMiddle.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
  // Look up documentation on shapes
  salesDistribution: PropTypes.shape({
    labels: PropTypes.arrayOf(PropTypes.string),
    series: PropTypes.arrayOf(PropTypes.number),
  }),
  getSalesDistributionByStore: PropTypes.func.isRequired,
};

GridMiddle.defaultProps = {
  classes: {},
  salesDistribution: {
    labels: [],
    series: [],
  },
};

const mapStateToProps = state => ({
  salesDistribution: state.companyData.salesDistribution,
});

export default compose(
  withStyles(styles, {
    name: 'GridMiddle',
  }),
  connect(
    mapStateToProps,
    {
      getSalesDistributionByStore,
    },
  ),
)(GridMiddle);
