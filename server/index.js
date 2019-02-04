require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const cors = require('cors');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({
  extended: true,
}));
app.use(express.json());
app.use(passport.initialize());
app.use(cors());
app.use(routes);

require('./config/passport')(passport);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

mongoose
  .connect(
    process.env.MONGODB_URI || 'mongodb://localhost/peppermint', {
      useNewUrlParser: true,
    },
  );

app.listen(PORT, () => {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
