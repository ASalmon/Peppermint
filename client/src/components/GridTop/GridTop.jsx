import React, { Component } from 'react';
import { compose } from 'recompose';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Top5Table from '../Top5Table';
import { getTopSellingItemsByAmount } from '../../actions/getTopSellingitemsByAmountActions';

const styles = () => ({
  root: {
    flexGrow: 1,
  },
});

class GridTop extends Component {
  componentDidMount() {
    this.props.getTopSellingItemsByAmount();
  }

  render() {
    const { classes, topSellingItemsByAmount } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12} md={4}>
            <Top5Table
              title="Top Performing Stores"
              data={topSellingItemsByAmount}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Top5Table
              title="Top Sale Item By Amount"
              data={topSellingItemsByAmount}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Top5Table
              title="Top Sale Item By Quantity"
              data={topSellingItemsByAmount}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

GridTop.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
  topSellingItemsByAmount: PropTypes.arrayOf(PropTypes.object),
  getTopSellingItemsByAmount: PropTypes.func.isRequired,
};

GridTop.defaultProps = {
  classes: {},
  topSellingItemsByAmount: [],
};

const mapStateToProps = state => ({
  topSellingItemsByAmount: state.companyData.topSellingItemsByAmount,
});

export default compose(
  withStyles(styles, { name: 'GridTop' }),
  connect(
    mapStateToProps,
    { getTopSellingItemsByAmount },
  ),
)(GridTop);
