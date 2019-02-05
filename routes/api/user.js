const router = require("express").Router();
var userController = require('./../../controllers/userControllers')

//API call for signup
router.route('/signup')
    .post(userController.signup,
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
                redirect: "/main/get-help"
            })
        }
    );




//API call for login
router
    .route('/login')
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
                redirect: "/main/get-help"
            })
        }
    );


//API call will return session info to the front end
router.route("/session")
    .get(userController.getSession)

//API call for logout
router.route('/logout')
    .get(userController.logout);

router.route("/:id")
    .get(userController.findById);

router.route('/update')
    .put(userController.update);

router.route('/goodsamaratin')
    .post(userController.updateUserDeedsArray)


module.exports = router;
