import moment from 'moment';

const now = moment().format('YYYY-MM-DD');

const sixMonthsAgo = moment().subtract(6, 'months').format('YYYY-MM-DD');

const yearAgo = moment().subtract(1, 'year').format('YYYY-MM-DD');

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

export const getYearlyPerformance = `
  {
    performancebyDates(from:"${yearAgo}", to:"${now}")
  }
`;
