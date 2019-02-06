import React, { Component } from 'react';
import { compose } from 'recompose';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Top5Table from '../Top5Table';
import getTopSellingItemsByPrice from '../../actions/getTopSellingitemsByPrice';
import getTopPerformingStores from '../../actions/getTopPerformingStores';
import getTopSellingItemsByQuantity from '../../actions/getTopSellingItemsByQuantity';

const styles = () => ({
  root: {
    flexGrow: 1,
  },
});

class GridTop extends Component {
  componentDidMount() {
    const {
      getTopSellingItemsByPrice: _getTopSellingItemsByPrice,
      getTopPerformingStores: _getTopPerformingStores,
      getTopSellingItemsByQuantity: _getTopSellingItemsByQuantity,
    } = this.props;

    _getTopSellingItemsByPrice();
    _getTopPerformingStores();
    _getTopSellingItemsByQuantity();
  }

  render() {
    const {
      classes,
      topSellingItemsByPrice,
      topPerformingStores,
      topSellingItemsByQuantity,
    } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12} md={4}>
            <Top5Table
              title="Top Performing Stores"
              column="Sales Amount"
              data={topPerformingStores}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Top5Table
              title="Top Sale Item By Amount"
              column="Sales Amount"
              data={topSellingItemsByPrice}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Top5Table
              title="Top Sale Item By Quantity"
              column="Quantity"
              data={topSellingItemsByQuantity}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

GridTop.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
  topSellingItemsByPrice: PropTypes.arrayOf(PropTypes.object),
  topSellingItemsByQuantity: PropTypes.arrayOf(PropTypes.object),
  topPerformingStores: PropTypes.arrayOf(PropTypes.object),
  getTopSellingItemsByPrice: PropTypes.func.isRequired,
  getTopSellingItemsByQuantity: PropTypes.func.isRequired,
  getTopPerformingStores: PropTypes.func.isRequired,
};

GridTop.defaultProps = {
  classes: {},
  topSellingItemsByPrice: [],
  topSellingItemsByQuantity: [],
  topPerformingStores: [],
};

const mapStateToProps = state => ({
  topSellingItemsByPrice: state.companyData.topSellingItemsByPrice,
  topPerformingStores: state.companyData.topPerformingStores,
  topSellingItemsByQuantity: state.companyData.topSellingItemsByQuantity,
});

export default compose(
  withStyles(styles, {
    name: 'GridTop',
  }),
  connect(
    mapStateToProps,
    {
      getTopSellingItemsByPrice,
      getTopPerformingStores,
      getTopSellingItemsByQuantity,
    },
  ),
)(GridTop);
