export const getTopSellingItemsByPriceQuery = `
  {
    topSellingItems(by: "price")
  }
`;

export const getTopSellingItemsByQuantityQuery = `
  {
    topSellingItems(by: "quantity")
  }
`;

export const getTopPerformingStoresQuery = `
  {
    topPerformingStores
  }
`;
