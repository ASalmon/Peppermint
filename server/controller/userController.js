require('dotenv').config();
const bcrypt = require('bcryptjs');
const gravatar = require('gravatar');
const jwt = require('jsonwebtoken');
const { User } = require('../models');
const validateLoginInput = require('../validation/login');
const validateRegisterInput = require('../validation/register');

module.exports = {
  login: (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const { username, password } = req.body;
    // Find user by username
    User.findOne({ username })
      .then((user) => {
        // Check if user exists
        if (!user) {
          errors.username = 'Invalid login information provided';
          return res.status(400).json(errors);
        }
        // Check password
        bcrypt.compare(password, user.password)
          .then((isMatch) => {
            if (isMatch) {
              // Create payload
              const payload = {
                id: user.id,
                username: user.username,
                email: user.email,
              };
              // Create JWT token
              jwt.sign(
                payload,
                process.env.secret,
                { expiresIn: 3600 },
                (authErr, token) => {
                  res.send({
                    success: true,
                    token: `Bearer ${token}`,
                  });
                },
              );
            } else {
              errors.username = 'Invalid login information provided';
              return res.status(400).json(errors);
            }
          });
      })
      .catch(error => res.status(503).json({ error }));
  },
  register: (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

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
          errors.username = 'Username already exists';
          return res.status(400).json(errors);
        }
      });
  },
};
