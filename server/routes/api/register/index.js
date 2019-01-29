const router = require('express').Router();
const { userController } = require('../../../controller');

router.route('/')
  .post(userController.register);

module.exports = router;
