import moment from 'moment';

const now = moment().format('YYYY-MM-DD');

const sixMonthsAgo = moment()
  .subtract(6, 'months')
  .format('YYYY-MM-DD');

const yearAgoBeginning = moment()
  .subtract(1, 'year')
  .format('YYYY-01-01');

const yearAgoEnd = moment()
  .subtract(1, 'year')
  .format('YYYY-12-31');

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
    performancebyDates(from:"${yearAgoBeginning}", to:"${yearAgoEnd}")
  }
`;

export const getGoalsData = `
  {
    getCompanyGoalsData(from:"${sixMonthsAgo}", to:"${now}")
  }
`;
