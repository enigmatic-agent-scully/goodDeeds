var passport = require('passport');
var router = require('express').Router();
const user = require("./../models");
const db = require("./../models");

module.exports = {

    login: (req, res) => {
        console.log(req.body)
        passport.authenticate('local.login', {
            successRedirect: '/api/user/main',
            failureRedirect: '/',
            failureFlash: true
        })
    },
    logout: (req, res) => {
        console.log('your here')
        req.logOut();
        console.log("you are logged out!")
    },
    signup: (req, res, next) => {
        console.log(req.body)
        passport.authenticate('local.signup', {
            function() {
                console.log('checking to see')

            }
        })(req, res, next);
    },
    isLoggedIn(req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }
        console.log('must login first!')
    }
};