const router = require('express').Router();
const { userController } = require('../../../controller');

router.route('/')
  .post(userController.login);

module.exports = router;
