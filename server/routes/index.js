const path = require('path');
const router = require('express').Router();
const api = require('./api');
const graphqlRoute = require('./graphql');


// Api Route
router.use('/api', api);
// Graphql Route
router.use('/graphql', graphqlRoute);

// HTML Route
if (process.env.NODE_ENV === 'production') {
  router.use((req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });
}

module.exports = router;
