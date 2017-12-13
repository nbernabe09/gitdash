const express    = require("express");
const bodyParser = require("body-parser");
const app        = express();
const PORT       = process.env.PORT || 3001;
const DEMO_USER_ID = 1111;
const keys = require('./config/keys');

const path = require('path');
const mongoose = require('mongoose');
const passport   = require("passport");

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongodbURI);

require('./services/passport');

const session    = require("express-session");

const db              = require("./models");
const MongoStore      = require('connect-mongo')(session);

const routes = require("./routes");

// Serve up static assets (usually on heroku)

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(session({
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
  secret: keys.cookieKey,
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(routes);

app.get('/auth/github', passport.authenticate('github', {
  successRedirect: '/',
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
