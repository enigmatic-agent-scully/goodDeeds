var express = require('express');
var router = express.Router();
var userController = require('./../../controllers/userControllers')




router.route('/signup')
    .post(userController.signup);

router.route('/login')
    .post(userController.login);

router.route('/logout')
    .get(userController.logout);

module.exports = router;
