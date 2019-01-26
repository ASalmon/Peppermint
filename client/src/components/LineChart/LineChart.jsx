import React from 'react';
import Chart from 'react-apexcharts';

class LineChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        chart: {
          id: 'apexchart-example',
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'Jun'],
        },
      },
      series: [
        {
          name: 'series-1',
          data: [30, 40, 45, 50, 49, 60],
        },
      ],
    };
  }
  render() {
    return (
      <Chart
        options={this.state.options}
        series={this.state.series}
        type="bar"
        width="100%"
        height={320}
      />
    );
  }
}

export default LineChart;
