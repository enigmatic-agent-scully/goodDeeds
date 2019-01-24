var express = require('express');
var router = express.Router();
var userController = require('./../../controllers/userControllers')




// router.route('/main')
//     .get(function (req, res) {
//         console.log(req.user);
//     });

router.route('/signup')
    .post(userController.signup, function (req, res) {
        console.log(`returned to the router.route('/singup) (user.js) API call with, 
                    req.user = ${req.user}`)
    });

router.route('/login')
    .post(
        userController.beforeLogin,
        userController.login,
        // This will handle errors
        function (err, req, res, next) {
            if (err) {
                return next(err)
            }
            next()
        },
        // Success responses
        function (req, res) {
            console.log(`returned to the router.route('/login) after a successful login, 
                        req.user = ${req.session.user}`)
            res.json({
                success: true,
                redirect: "/main"
            })
        }
    );

//API call will return session info to the front end
router.route("/session")
    .get(userController.getSession)

//logout API call
router.route('/logout')
    .get(userController.logout);



module.exports = router;
