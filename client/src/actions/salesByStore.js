export function salesByStoreHasErrored(bool) {
  return {
    type: 'SALES_BY_STORE_HAS_ERRORED',
    hasErrored: bool,
  };
}
export function salesByStoreIsLoading(bool) {
  return {
    type: 'SALES_BY_STORE_IS_LOADING',
    isLoading: bool,
  };
}
export function salesByStoreFetchDataSuccess(salesByStore) {
  return {
    type: 'SALES_BY_STORE_FETCH_DATA_SUCCESS',
    salesByStore,
  };
}

export function salesByStoreFetchData(url) {
  return (dispatch) => {
    dispatch(salesByStoreIsLoading(true));
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(salesByStoreIsLoading(false));
        return response;
      })
      .then(response => response.json())
      .then(items => dispatch(salesByStoreFetchDataSuccess(items)))
      .catch(() => dispatch(salesByStoreHasErrored(true)));
  };
}
