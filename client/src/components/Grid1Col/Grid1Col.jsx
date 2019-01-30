import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import LineChart from '../LineChart';
import BarChart from '../BarChart';

const styles = () => ({
  root: {
    flexGrow: 1,
  },
});

const lineOptions = {
  options: {
    chart: {
      type: 'line',
      stacked: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [4, 4],
    },
    plotOptions: {
      bar: {
        columnWidth: '20%',
      },
    },
    xaxis: {
      categories: ['July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb'],
    },
    yaxis: [
      {
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: '#247BA0',
        },
        labels: {
          style: {},
        },
        title: {
          text: 'Series A',
        },
      },
      {
        opposite: true,
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: '#247BA0',
        },
      },
    ],
    tooltip: {
      shared: false,
      intersect: true,
      x: {
        show: false,
      },
    },
    legend: {
      horizontalAlign: 'left',
      offsetX: 40,
    },
  },
};

const lineSeries = [
  {
    name: '2018',
    data: [23, 12, 54, 61, 32, 56, 81, 19],
  },
  {
    name: '2019',
    data: [25, 13, 55, 58, 30, 54, 89, 24],
  },
];

function Grid1Col(props) {
  const { classes } = props;

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
              <LineChart
                lineOptions={lineOptions.options}
                lineSeries={lineSeries}
              />
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
              <BarChart />
            </CardContent>
          </Card>
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
