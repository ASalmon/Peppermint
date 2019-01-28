const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLID,
} = graphql;

const {
  CompanyType,
  StoreType,
} = require('../types');

const {
  companyQuery,
  storeQuery,
} = require('../query');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    companyInfo: {
      type: CompanyType,
      args: {
        name: {
          type: GraphQLString,
        },
      },
      resolve: companyQuery.companyInfo,
    },
    stores: {
      type: new GraphQLList(StoreType),
      resolve: storeQuery.stores,
    },
    storeByName: {
      type: StoreType,
      args: {
        name: {
          type: GraphQLString,
        },
      },
      resolve: storeQuery.storeByName,
    },
    storeById: {
      type: StoreType,
      args: {
        id: {
          type: GraphQLID,
        },
      },
      resolve: storeQuery.storeById,
    },
  }),
});

module.exports = RootQuery;
