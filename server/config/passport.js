require('dotenv').config();
const JwtStratergy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const mongoose = require('mongoose');

const User = mongoose.model('User');

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.secret;

module.exports = (passport) => {
  passport.use(new JwtStratergy(opts, (jwtPayload, done) => {
    User.findById(jwtPayload.id)
      .then((user) => {
        if (user) {
          return done(null, user);
        }
        return done(null, false);
      })
      .catch((err) => {
        throw err;
      });
  }));
};
