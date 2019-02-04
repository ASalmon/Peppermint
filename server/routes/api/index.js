const router = require('express').Router();
const loginRoute = require('./login');
const registerRoute = require('./register');

// Login Route
router.use('/login', loginRoute);
// Registration Route
router.use('/register', registerRoute);

module.exports = router;
