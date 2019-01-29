const router = require('express').Router();
const graphqlRoute = require('./graphql');

router.use('/', graphqlRoute);

module.exports = router;
