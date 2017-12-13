const express    = require("express");
const bodyParser = require("body-parser");
const app        = express();
const PORT       = process.env.PORT || 3001;
const DEMO_USER_ID = 1111;
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const path = require('path');
const mongoose = require('mongoose');
const passport   = require("passport");

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongodbURI);

require('./services/passport');
const db              = require("./models");
require('./services/passport');

const routes = require("./routes");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(routes);

app.get('/auth/github', (req, res, next) => {
  console.log("###");
  console.log(Reflect.ownKeys(req));
  console.log(req.session);
  console.log("$$$");
  next();
  }, passport.authenticate('github', {
  successRedirect: '/auth/github/callback',
  scope: ['user:email']
}));

app.get('/auth/github/callback',
passport.authenticate('github', { failureRedirect: '/login' }),
function (req, res) {
  res.redirect('/');
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  })
} else {
  app.use(express.static("client/public"));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "public", "index.html"))
  })
}

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});

function ensureAuthenticated(req, res, next) {
  console.log("ENSURE AUTHENTICATED");
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/login')
}

mongoose.connection.on('connected', function () {
  console.log('Mongoose connected to ' + keys.mongodbURI);
});
mongoose.connection.on('error', function (err) {
  console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function () {
  console.log('Mongoose disconnected');
});

process.on('SIGINT', function () {
  mongoose.connection.close(function () {
    console.log('Mongoose disconnected through app termination');
    process.exit(0);
  });
});
