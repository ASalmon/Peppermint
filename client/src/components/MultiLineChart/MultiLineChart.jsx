import React from 'react';
import Chart from 'react-apexcharts';
import PropTypes from 'prop-types';

class LineChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: props.lineOptions,
      series: props.lineSeries,
    };
  }

  render() {
    const { options, series } = this.state;
    return (
      <Chart
        options={options}
        series={series}
        type="line"
        width="100%"
        height={350}
      />
    );
  }
}

LineChart.propTypes = {
  lineSeries: PropTypes.arrayOf(PropTypes.object),
  lineOptions: PropTypes.objectOf(PropTypes.object),
};

LineChart.defaultProps = {
  lineSeries: [],
  lineOptions: {},
};

export default LineChart;
