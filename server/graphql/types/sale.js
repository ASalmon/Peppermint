const graphql = require('graphql');
const { DepartmentType } = require('../types');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat,
  GraphQLInt,
  GraphQLID,
} = graphql;

const SaleType = new GraphQLObjectType({
  name: 'Sale',
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
    price: {
      type: GraphQLFloat,
    },
    quantity: {
      type: GraphQLInt,
    },
    departmentID: {
      type: DepartmentType,
      resolve: '', // add resolver
    },
  }),
});

module.exports = SaleType;
