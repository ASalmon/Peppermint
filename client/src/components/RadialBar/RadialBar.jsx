import React from 'react';
import Chart from 'react-apexcharts';
import PropTypes from 'prop-types';

class RadialBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        series: [67],
        colors: ['#20E647'],
        plotOptions: {
          radialBar: {
            hollow: {
              margin: 0,
              size: '70%',
              background: '#293450',
            },
            track: {
              dropShadow: {
                enabled: true,
                top: 2,
                left: 0,
                blur: 4,
                opacity: 0.15,
              },
            },
            dataLabels: {
              name: {
                offsetY: -10,
                color: '#fff',
                fontSize: '13px',
              },
              value: {
                color: '#fff',
                fontSize: '30px',
                show: true,
              },
            },
          },
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            type: 'vertical',
            gradientToColors: ['#87D4F9'],
            stops: [0, 100],
          },
        },
        stroke: {
          lineCap: 'round',
        },
        labels: ['Progress'],
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
        type="radialBar"
        width="100%"
        height={350}
      />
    );
  }
}

RadialBar.propTypes = {
  pieData: PropTypes.objectOf(PropTypes.array),
};

RadialBar.defaultProps = {
  pieData: {},
};

export default RadialBar;
