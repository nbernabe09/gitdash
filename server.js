const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 3001;
const DEMO_USER_ID = 1111;
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const path = require('path');
const mongoose = require('mongoose');
const passport = require('passport');

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongodbURI);

require('./services/passport');
require('./models/User');
require('./services/passport');

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

app.get('/auth/github', passport.authenticate('github', {
  successRedirect: '/',
  scope: ['user:email']
}));

app.get('/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/login' }),
  function (req, res) {
    res.redirect('/');
  });

app.get('/api/current_user', (req, res) => {
  res.send(req.user);
})
app.get('/api/logout', (req, res) => {
  req.logout();
  res.send('loggout');
})
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

app.listen(PORT, function () {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});

function ensureAuthenticated(req, res, next) {
  console.log("ENSURE AUTHENTICATED");
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/login')
}
