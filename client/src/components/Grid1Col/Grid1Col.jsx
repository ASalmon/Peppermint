import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Table5Table from '../Top5Table';
import LineChart from '../LineChart';

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
      categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
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
    name: 'Team A',
    data: [23, 12, 54, 61, 32, 56, 81, 19],
  },
  {
    name: 'Team B',
    data: [25, 13, 55, 58, 30, 54, 89, 24],
  },
];

function Grid1Col(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={6}>
          <Card className={classes.card}>
            <CardHeader title="Projection" subheader="Next 6 Months" />
            <CardContent>
              <LineChart
                lineOptions={lineOptions.options}
                lineSeries={lineSeries}
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Table5Table title="Placeholder" />
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
