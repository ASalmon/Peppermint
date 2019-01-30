import React from 'react';
import Chart from 'react-apexcharts';

class BarChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        chart: {
          id: 'apexchart-barchart',
        },
        plotOptions: {
          bar: {
            horizontal: true,
          },
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
    // Destructure options and series from state
    const { options, series } = this.state;
    return (
      <Chart
        options={options}
        series={series}
        type="bar"
        width="100%"
        height={350}
      />
    );
  }
}

export default BarChart;
