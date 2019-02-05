export function salesByStoreHasErrored(state = false, action) {
  switch (action.type) {
    case 'SALES_BY_STORE_HAS_ERRORED':
      return action.hasErrored;
    default:
      return state;
  }
}

export function salesByStoreIsLoading(state = false, action) {
  switch (action.type) {
    case 'SALES_BY_STORE_IS_LOADING':
      return action.isLoading;
    default:
      return state;
  }
}

export function stores(state = [], action) {
  switch (action.type) {
    case 'SALES_BY_STORE_FETCH_DATA_SUCCESS':
      return action.salesByStore;
    default:
      return state;
  }
}
