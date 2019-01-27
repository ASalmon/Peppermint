const graphql = require('graphql');
const { UserType } = require('../types');
const { userResolver } = require('../resolver');

const { GraphQLObjectType, GraphQLString } = graphql;

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    // Add user
    addUser: {
      type: UserType,
      args: {
        username: { type: GraphQLString },
        password: { type: GraphQLString },
        email: { type: GraphQLString },
      },
      resolve: userResolver.addUser,
    },
    // Remove user
    removeUser: {
      type: UserType,
      args: {
        id: { type: GraphQLString },
      },
      resolve: userResolver.removeUser,
    },
    // Update user
  },
});

module.exports = Mutation;
