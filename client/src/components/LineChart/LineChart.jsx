import React from 'react';
import Chart from 'react-apexcharts';
import PropTypes from 'prop-types';

let Options = {
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
};

const LineChart = (props) => {
  const { series, xaxis } = props;

  Options = {
    ...Options,
    xaxis,
  };
  return (
    <Chart
      options={Options}
      series={series}
      type="line"
      width="100%"
      height={350}
    />
  );
};

LineChart.propTypes = {
  series: PropTypes.shape(PropTypes.object),
  xaxis: PropTypes.shape(PropTypes.object),
};

LineChart.defaultProps = {
  xaxis: [],
  series: [],
};

export default LineChart;
