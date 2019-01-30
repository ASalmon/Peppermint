require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Passport midleware
app.use(passport.initialize());
// Passport Config
require('./config/passport')(passport);
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose
  .connect(
    process.env.MONGODB_URI || 'mongodb://localhost/peppermint',
    { useNewUrlParser: true },
  );

// Start the API server
app.listen(PORT, () => {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
