const passport = require("passport");
const GitHubStrategy = require('passport-github2').Strategy;
const keys = require('../config/keys.js');

const mongoose = require('mongoose');

const User = require('../models/User');

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  console.log("^^^%$"+id);
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

passport.use(new GitHubStrategy({
  clientID: keys.githubClientId,
  clientSecret: keys.githubClientSecret,
  callbackURL: "/auth/github/callback",
  proxy: true
},
  function (accessToken, refreshToken, profile, done) {
    // asynchronous verification, for effect...
    console.log('token', accessToken);

    process.nextTick(function () {
      // To keep the example simple, the user's GitHub profile is returned to
      // represent the logged-in user.  In a typical application, you would want
      // to associate the GitHub account with a user record in your database,
      // and return that user instead.
      return done(null, profile);
    });
  }
));
