import React from 'react';
import Chart from 'react-apexcharts';

class PieChart extends React.Component {
  state = {
    options: {
      series: [],
      labels: [],
    },
  };

  componentDidMount() {
    this.setState({
      options: this.props.myOptions,
    });
  }

  render() {
    return (
      <Chart
        options={this.state.options}
        series={this.state.options.series}
        labels={this.state.options.labels}
        type="pie"
        width="100%"
        height={320}
      />
    );
  }
}

export default PieChart;
