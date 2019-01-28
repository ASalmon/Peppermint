const graphql = require('graphql');
const { StoreType } = require('../types');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLID,
} = graphql;

const CompanyType = new GraphQLObjectType({
  name: 'Company',
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
    // stores: {
    //   type: new GraphQLList(StoreType),
    //   resolve: '', // add resolver
    // },
  }),
});

module.exports = CompanyType;
