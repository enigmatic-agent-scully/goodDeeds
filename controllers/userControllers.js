var passport = require('passport');
var router = require('express').Router();
const user = require("./../models");
const db = require("./../models");

const passportLogin =

    module.exports = {
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
            console.log(`inside the signup function "userController.js" with req.body = ${req.body}, 
        right before passport.authenticate`)
            passport.authenticate('local.signup', {
                successRedirect: '/',
                failureRedirect: 'fail',
                passReqToCallback: true
            })(req, res, next);
        },

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
        }
    };