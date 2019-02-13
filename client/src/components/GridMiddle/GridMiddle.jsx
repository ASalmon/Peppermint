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
import {
  getSalesDistributionByStore,
  getGoalsData,
} from '../../actions/companyActions';


const styles = () => ({
  root: {
    flexGrow: 1,
  },
  card: {
    width: '100%',
    height: 500,
  },
});

class GridMiddle extends Component {
  componentDidMount() {
    const {
      getSalesDistributionByStore: _getSalesDistributionByStore,
      getGoalsData: _getGoalsData,
    } = this.props;

    _getSalesDistributionByStore();
    _getGoalsData();
  }

  render() {
    const { classes, salesDistribution, goalsData } = this.props;

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
        categories: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
      },
      series: [
        {
          name: 'Goal',
          type: 'column',
          data: goalsData.goal,
        },
        {
          name: 'Actual',
          type: 'column',
          data: goalsData.actual,
        },
      ],
    };
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
                {goalsData.goal && goalsData.actual ? (
                  <BarChart barOptions={barOptions} />
                ) : (
                  undefined
                )}
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
  salesDistribution: PropTypes.shape({
    labels: PropTypes.arrayOf(PropTypes.string),
    series: PropTypes.arrayOf(PropTypes.number),
  }),
  getSalesDistributionByStore: PropTypes.func.isRequired,
  getGoalsData: PropTypes.func.isRequired,
  goalsData: PropTypes.objectOf(PropTypes.shape),
};

GridMiddle.defaultProps = {
  classes: {},
  salesDistribution: {
    labels: [],
    series: [],
  },
  goalsData: {},
};

const mapStateToProps = state => ({
  salesDistribution: state.companyData.salesDistribution,
  goalsData: state.companyData.goalsData,
});

export default compose(
  withStyles(styles, {
    name: 'GridMiddle',
  }),
  connect(
    mapStateToProps,
    {
      getSalesDistributionByStore,
      getGoalsData,
    },
  ),
)(GridMiddle);
