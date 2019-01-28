import React from 'react';
import Chart from 'react-apexcharts';
import PropTypes from 'prop-types';

class PieChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        series: props.pieData.series,
        labels: props.pieData.labels,
        legend: { position: 'right' },
      },
    };
  }

  render() {
    const { options } = this.state;
    return (
      <Chart
        options={options}
        series={options.series}
        labels={options.labels}
        type="donut"
        width="100%"
        height={350}
      />
    );
  }
}

PieChart.propTypes = {
  pieData: PropTypes.objectOf(PropTypes.array),
};

PieChart.defaultProps = {
  pieData: {},
};

export default PieChart;
