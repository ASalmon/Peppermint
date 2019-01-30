import React, { Component } from 'react';
import { connect } from 'react-redux';
import { itemsFetchData } from '../actions/items';

class ItemList extends Component {
  componentDidMount() {
    const { fetchData } = this.props;
    fetchData('http://5826ed963900d612000138bd.mockapi.io/items');
  }

  render() {
    const { hasErrored, isLoading, items } = this.props;

    if (hasErrored) {
      return <p>Sorry! There was an error loading the items</p>;
    }
    if (isLoading) {
      return <p>Loading…</p>;
    }
    return (
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.label}</li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  items: state.items,
  hasErrored: state.itemsHasErrored,
  isLoading: state.itemsIsLoading,
});

const mapDispatchToProps = dispatch => ({
  fetchData: url => dispatch(itemsFetchData(url)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ItemList);
