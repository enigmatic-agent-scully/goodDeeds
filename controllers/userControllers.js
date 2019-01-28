var passport = require('passport');
var router = require('express').Router();
const db = require("./../models");


const UserControllers = module.exports = {
    findById: (req, res) => {
        console.log(req.params.id);
        db.User
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    beforeLogin(req, res, next) {
        console.log(`inside the login function "userController.js" with req.body.email = ${req.body.email}, 
    right before passport.authenticate`);
        next();
    },
    login(req, res, next) {
        console.log(`inside userControllers.js > login > returned from passport.authenticate, 
        req.user = ${req.user}`);
        (passport.authenticate('local.login', {
            session: true
        }, function (err, user) {
            if (err) {
                return next(err)
            }
            req.session.user = user
            next();
        }))(req, res, next)
    },
    logout(req, res) {
        console.log(req.user)
        req.logout();
        req.session.user = null
        console.log(req.user)
        res.json({
            redirect: "/",
            logged_out: true
        })
    },
    signup(req, res, next) {
        console.log(`inside userControllers.js > login > returned from passport.authenticate, 
        req.user = ${req.user}`);
        (passport.authenticate('local.signup', {
            session: true
        }, function (err, user) {
            if (err) {
                return next(err)
            }
            req.session.user = user
            next();
        }))(req, res, next)
    },

    // signup(req, res, next) {
    //     console.log(`inside the signup function "userController.js" with req.body = ${req.body}, 
    // right before passport.authenticate`)
    //     passport.authenticate('local.signup', {
    //         successRedirect: '/',
    //         failureRedirect: 'fail',
    //         passReqToCallback: true
    //     })(req, res, next);
    // },
    //this function will return our session info, but the reason we write it out
    //like this is so we only send back specific information we want to send to the 
    //front end...(for examle not the users password)
    getSession(req, res, next) {
        if (req.session.user) {
            const userInfo = {
                email: req.session.user.email,
                id: req.session.user._id
            }
            res.json({
                // TODO Don't expose sensitive data
                user: userInfo,
                authenticated: true
            })
        } else {
            res.json({
                user: null,
                authenticated: false
            })
        }
    },

    isLoggedIn(req, res, next) {
        if (req.session.user) {
            return next();
        }
        console.log('must login first!')
        const err = new Error("You have to log in first");
        err.statusCode = 403;
        next(err);
    },

    checkApiAuthentication(req, res, next) {
        // Check for public routes (e.g. login/session etc)
        // And then validate the authenticated routes
        const publicRoutes = [
            "/user/login",
            "/user/signup",
            "/user/session",
        ]
        if (publicRoutes.includes(req.url)) {
            return next()
        }
        UserControllers.isLoggedIn(req, res, next);
    }
};


// middlewares:
// (req, res) -----> m1, m2, m3 .... mn ---> not found (is also a middleware) ---> 500 (internal server error) middleware  --> 500 express middleware (just in the worst case, when we cannot render even the custom 500 error page)
// browser