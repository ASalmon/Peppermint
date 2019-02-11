import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import LineChart from '../LineChart';
import BarChart from '../BarChart';
import { getYearlyPerformance } from '../../actions/companyActions';

const styles = () => ({
  root: {
    flexGrow: 1,
  },
});

const barOptions = {
  chart: {
    id: 'companyGoals',
  },
  plotOptions: {
    bar: {
      horizontal: true,
    },
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'Jun'],
  },
  series: [
    {
      name: 'series-1',
      data: [30, 40, 45, 50, 49, 60],
    },
  ],
};

class GridBottom extends Component {
  componentDidMount() {
    const { getYearlyPerformance: _getYearlyPerformance } = this.props;
    _getYearlyPerformance();
  }

  render() {
    const {
      classes,
      yearlyPerformancexAxis,
      yearlyPerformanceLineSeries,
    } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12} md={6}>
            <Card className={classes.card}>
              <CardHeader
                title="Yearly Performance"
                subheader="By Month"
                className={classes.cardheader}
              />
              <CardContent>
                {yearlyPerformancexAxis
                && yearlyPerformanceLineSeries
                && yearlyPerformancexAxis.categories
                && yearlyPerformancexAxis.categories.length ? (
                  <LineChart
                    xaxis={yearlyPerformancexAxis}
                    series={yearlyPerformanceLineSeries}
                  />
                  ) : (
                    undefined
                  )}
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card className={classes.card}>
              <CardHeader
                title="Projection"
                subheader="Next 6 Months"
                className={classes.cardheader}
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

GridBottom.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
  yearlyPerformancexAxis: PropTypes.shape(PropTypes.array),
  yearlyPerformanceLineSeries: PropTypes.shape(PropTypes.array),
  getYearlyPerformance: PropTypes.func.isRequired,
};

GridBottom.defaultProps = {
  classes: {},
  yearlyPerformancexAxis: [],
  yearlyPerformanceLineSeries: [],
};

const mapStateToProps = state => ({
  yearlyPerformancexAxis: state.companyData.yearlyPerformance.xaxis,
  yearlyPerformanceLineSeries: state.companyData.yearlyPerformance.lineSeries,
});

export default compose(
  withStyles(styles, {
    name: 'GridBottom',
  }),
  connect(
    mapStateToProps,
    {
      getYearlyPerformance,
    },
  ),
)(GridBottom);
