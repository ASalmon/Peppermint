require('dotenv').config();
const bcrypt = require('bcryptjs');
const gravatar = require('gravatar');
const jwt = require('jsonwebtoken');
const { User } = require('../models');

module.exports = {
  login: (req, res) => {
    const { username, password } = req.body;
    // Find user by username
    User.findOne({ username })
      .then((user) => {
        // Check if user exists
        if (!user) {
          res.status(404).json({ username: 'User not found' });
        }
        // Check password
        bcrypt.compare(password, user.password)
          .then((isMatch) => {
            if (isMatch) {
              // Create payload
              const payload = {
                id: user.id,
                username: user.username,
                avatar: user.avatar,
              };
              // Create JWT token
              jwt.sign(
                payload,
                process.env.secret,
                { expiresIn: 18000 },
                (authErr, token) => {
                  res.send({
                    success: true,
                    payload,
                    token: `Bearer ${token}`,
                  });
                },
              );
            } else {
              res.status(400).json({ password: 'Password incorrect' });
            }
          });
      })
      .catch(error => res.status(503).json({ error }));
  },
  register: (req, res) => {
    const { username, password, email } = req.body;
    // Check if username already exist
    User.findOne({ username })
      .then((user) => {
        if (!user) {
          const avatar = gravatar.url(email, {
            s: 200,
            r: 'pg',
            d: 'mm',
          });
          // Create user
          const newUser = new User({
            username,
            password,
            email,
            avatar,
          });
          // Hash password
          bcrypt.genSalt(10, (error, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) throw err;
              newUser.password = hash;
              newUser.save()
                .then(addedUser => res.json(addedUser))
                .catch(er => res.status(503).json(er));
            });
          });
        } else {
          res.status(400).json({ username: 'username already exists' });
        }
      });
  },
};
