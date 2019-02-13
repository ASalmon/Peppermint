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
  barOptions: PropTypes.shape({
    chart: PropTypes.shape({
      id: PropTypes.string,
    }),
    plotOptions: PropTypes.shape({
      bar: PropTypes.shape({
        columnWidth: PropTypes.string,
        endingShape: PropTypes.string,
      }),
    }),
    xaxis: PropTypes.shape({
      categories: PropTypes.arrayOf(PropTypes.string),
    }),
    series: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      type: PropTypes.string,
      data: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.number),
        PropTypes.arrayOf(PropTypes.string),
      ]),
    })),
  }),
};

BarChart.defaultProps = {
  barOptions: {},
};

export default BarChart;
