const passport = require('passport');
const graphqlHTTP = require('express-graphql');
const router = require('express').Router();
const schema = require('../../graphql');

router.route('/')
  .all(
    passport.authenticate(
      'jwt',
      { session: false },
    ),
    graphqlHTTP({
      schema,
      graphiql: true,
    }),
  );

module.exports = router;
