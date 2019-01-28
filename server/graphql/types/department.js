const graphql = require('graphql');
const { StoreType, SaleType } = require('../types');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLID,
} = graphql;

const DepartmentType = new GraphQLObjectType({
  name: 'Department',
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
    store: {
      type: StoreType,
      resolve: '', // add resolver
    },
    sales: {
      type: new GraphQLList(SaleType),
      resolve: '', // add resolver
    },
  }),
});

module.exports = DepartmentType;
