import React, { Component } from 'react';
import { compose } from 'recompose';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Top5Table from '../Top5Table';
import getTopSellingItemsByPrice from '../../actions/getTopSellingitemsByPrice';
import getTopPerformingStores from '../../actions/getTopPerformingStores';

const styles = () => ({
  root: {
    flexGrow: 1,
  },
});

class Grid3Col extends Component {

  componentDidMount() {
    this.props.getTopSellingItemsByPrice();
    this.props.getTopPerformingStores();
  }

  render() {
    const {
      classes,
      topSellingItemsByPrice,
      topPerformingStores,
    } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12} md={4}>
            <Top5Table
              title="Top Performing Stores"
              data={topPerformingStores}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Top5Table
              title="Top Sale Item By Amount"
              data={topSellingItemsByPrice}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Top5Table
              title="Top Sale Item By Quantity"
              data={topSellingItemsByPrice}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

Grid3Col.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
  topSellingItemsByPrice: PropTypes.arrayOf(PropTypes.object),
  topPerformingStores: PropTypes.arrayOf(PropTypes.object),
  getTopSellingItemsByPrice: PropTypes.func.isRequired,
  getTopPerformingStores: PropTypes.func.isRequired,
};

Grid3Col.defaultProps = {
  classes: {},
  topSellingItemsByPrice: [],
  topPerformingStores: [],
};

const mapStateToProps = state => ({
  topSellingItemsByPrice: state.companyData.topSellingItemsByPrice,
  topPerformingStores: state.companyData.topPerformingStores,
});

export default compose(
  withStyles(styles,
    {
      name: 'Grid3Col',
    }),
  connect(mapStateToProps, {
    getTopSellingItemsByPrice,
    getTopPerformingStores,
  }),
)(Grid3Col);
