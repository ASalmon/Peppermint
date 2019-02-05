export function topStoreHasErrored(state = false, action) {
  switch (action.type) {
    case 'TOP_STORE_HAS_ERRORED':
      return action.hasErrored;
    default:
      return state;
  }
}

export function topStoreIsLoading(state = false, action) {
  switch (action.type) {
    case 'TOP_STORE_IS_LOADING':
      return action.isLoading;
    default:
      return state;
  }
}

export function stores(state = [], action) {
  switch (action.type) {
    case 'ITEMS_FETCH_DATA_SUCCESS':
      return action.items;
    default:
      return state;
  }
}
