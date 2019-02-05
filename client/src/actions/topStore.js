export function topStoreHasErrored(bool) {
  return {
    type: 'TOP_STORE_HAS_ERRORED',
    hasErrored: bool,
  };
}
export function topStoreIsLoading(bool) {
  return {
    type: 'TOP_STORE_IS_LOADING',
    isLoading: bool,
  };
}
export function topStoreFetchDataSuccess(topStore) {
  return {
    type: 'TOP_STORE_FETCH_DATA_SUCCESS',
    topStore,
  };
}

export function topStoreFetchData(url) {
  return (dispatch) => {
    dispatch(topStoreIsLoading(true));
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(topStoreIsLoading(false));
        return response;
      })
      .then(response => response.json())
      .then(items => dispatch(topStoreFetchDataSuccess(items)))
      .catch(() => dispatch(topStoreHasErrored(true)));
  };
}
