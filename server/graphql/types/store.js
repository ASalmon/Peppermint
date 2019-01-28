const graphql = require('graphql');
const { storeQuery } = require('../query');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
} = graphql;

const StoreType = new GraphQLObjectType({
  name: 'Store',
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
    location: {
      type: GraphQLString,
    },
    company: {
      type: StoreType,
      resolve: storeQuery.companyInfo,
    },
  }),
});

module.exports = StoreType;
