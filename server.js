const express = require("express");
var path = require('path');
var cookieParser = require('cookie-parser');
const bodyParser = require("body-parser");
var session = require('express-session');
const mongoose = require("mongoose");
var passport = require('passport');
var MongoStore = require('connect-mongo')(session);
var flash = require('express-flash');
const routes = require("./routes/index");
const app = express();
const PORT = process.env.PORT || 3001;


require('./config/passport');

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(express.static('./client/public'));
app.use(cookieParser());

//using the store: new MongoStore creates a new colection in our dB to store the sessions info (cookie)
//this way the web browser refresh will not delete it
app.use(session({
  secret: 'mysecretsessionkey',
  resave: true,
  saveUninitialized: true,
  store: new MongoStore({ mongooseConnection: mongoose.connection })
}));
app.use(flash());
// Incorporate PASSPORT
app.use(passport.initialize());
app.use(passport.session());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}




// Add routes, both API and view
app.use(routes);


// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/gooddeedsdb");

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
})