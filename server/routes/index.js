const path = require('path');
const router = require('express').Router();
const graphqlRoute = require('./graphql');
const login = require('./api');

// Login Route
router.use('/api', login);
// GraphQl Route
router.use('/graphql', graphqlRoute);
// HTML Route
router.use((req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = router;
