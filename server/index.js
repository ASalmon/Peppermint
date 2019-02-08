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

require('./config/passport')(passport);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
} else {
  const whitelist = ['http://localhost:3000', 'http://localhost:3001'];
  const corsOptions = {
    origin: (origin, callback) => {
      if (whitelist.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
  };
  app.use(cors(corsOptions));
}

app.use(routes);

mongoose
  .connect(
    process.env.MONGODB_URI || 'mongodb://localhost/peppermint', {
      useNewUrlParser: true,
    },
  );

app.listen(PORT, () => {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
