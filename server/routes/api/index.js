const router = require('express').Router();
const loginRoute = require('./login');
const registerRoute = require('./register');


// Login Route
router.use('/login', loginRoute);
// Registration Route
router.use('/register', registerRoute);

// User routes
router.use('/users', userRoutes);
module.exports = router;
