const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString } = graphql;
const { UserType } = require('../types');
const { userQuery } = require('../query');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    login: {
      type: UserType,
      args: {
        username: {
          type: GraphQLString,
        },
        password: {
          type: GraphQLString,
        },
      },
      resolve: userQuery.login,
    },
  }),
});

module.exports = RootQuery;
