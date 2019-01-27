const { User } = require('../../models');

module.exports = {
  login: (parent, args) => User.findOne({
    username: args.username,
    password: args.password,
  }),
};
