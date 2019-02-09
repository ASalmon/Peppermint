import React from 'react';
import Chart from 'react-apexcharts';
import PropTypes from 'prop-types';

const BarChart = (props) => {
  const { barOptions } = props;

  return barOptions && barOptions.series ? (
    <Chart
      options={barOptions}
      series={barOptions.series}
      type="bar"
      width="100%"
      height={350}
    />
  ) : (
    <p>Loading...</p>
  );
};

BarChart.propTypes = {
  barOptions: PropTypes.shape(PropTypes.object),
};

BarChart.defaultProps = {
  barOptions: {},
};

export default BarChart;
