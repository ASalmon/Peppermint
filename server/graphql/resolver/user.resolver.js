const bcrypt = require('bcryptjs');
const { User } = require('../../models');

module.exports = {
  addUser: async (parent, args) => {
    const user = new User({
      username: args.username,
      password: args.password,
      email: args.email,
    });
    user.password = await new Promise((resolve, reject) => {
      bcrypt.genSalt(10, (error, salt) => (
        bcrypt.hash(args.password, salt, (err, hash) => {
          if (err) throw err;
          resolve(hash);
        })
      ));
    });
    return user.save();
  },
  removeUser: (parent, args) => User.findOneAndDelete({
    _id: args.id,
  }),
};
