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
  plotOptions: {
    bar: {
      horizontal: true,
    },
  },
  xaxis: {
    categories: ['Mar', 'Apr', 'May', 'Jun', 'Jul'],
  },
  series: [
    {
      name: 'projections',
      data: [5570, 5340, 5109, 5744, 6130, 5907],
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

    const showCardContent = Boolean(yearlyPerformancexAxis
      && yearlyPerformanceLineSeries
      && yearlyPerformancexAxis.categories
      && yearlyPerformancexAxis.categories.length);

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12} md={6}>
            <Card className={classes.card}>
              <CardHeader
                title="Yearly Sales Performance"
                subheader="By Year"
                className={classes.cardheader}
              />
              <CardContent>
                {showCardContent ? (
                  <LineChart
                    xaxis={yearlyPerformancexAxis}
                    series={yearlyPerformanceLineSeries}
                  />
                ) : (
                  <p>Chart is loading...</p>
                )}
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card className={classes.card}>
              <CardHeader
                title="Sales Projection"
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
  yearlyPerformancexAxis: PropTypes.arrayOf(PropTypes.object),
  yearlyPerformanceLineSeries: PropTypes.objectOf(PropTypes.shape),
  getYearlyPerformance: PropTypes.func.isRequired,
};

GridBottom.defaultProps = {
  classes: {},
  yearlyPerformancexAxis: {},
  yearlyPerformanceLineSeries: [],
};

const mapStateToProps = (state) => {
  console.log('hi');
  return {
    yearlyPerformancexAxis: state.companyData.yearlyPerformance.xaxis,
    yearlyPerformanceLineSeries: state.companyData.yearlyPerformance.lineSeries,
  };
};

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
