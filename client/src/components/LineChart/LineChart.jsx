import React from 'react';
import Chart from 'react-apexcharts';
import PropTypes from 'prop-types';

const defaultOptions = {
  chart: {
    type: 'line',
  },
  grid: {
    row: {
      colors: ['#f3f3f3', 'transparent'],
      opacity: 0.5,
    },
  },
};

const LineChart = (props) => {
  const { series, xaxis } = props;

  const options = Object.assign({}, defaultOptions, {
    xaxis,
  });

  return (
    <Chart
      options={options}
      series={series}
      type="line"
      width="100%"
      height={350}
    />
  );
};

LineChart.propTypes = {
  series: PropTypes.shape(PropTypes.array),
  xaxis: PropTypes.shape(PropTypes.array),
};

LineChart.defaultProps = {
  xaxis: [],
  series: [],
};

export default LineChart;
