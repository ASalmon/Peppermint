const graphql = require('graphql');
const RootQuery = require('./schema');
const Mutation = require('./mutation');

const { GraphQLSchema } = graphql;

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
