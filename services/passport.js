const passport = require("passport");
const GitHubStrategy = require('passport-github2').Strategy;
const keys = require('../config/keys.js');

const mongoose = require('mongoose');

const User           = require('../models/User');
const RepoCollection = require('../models/RepoCollection');

passport.serializeUser(function (user, done) {
  User.find({ github_id: user.id })
      .then(e1 => {
        if(e1.length === 0) {
          RepoCollection
            .create({})
            .then(e2 => {
              User.create({ github_id: user.id, repo_collection: e2 },
                (err, result) => {
                  done(null, result);
                }
              )
            })
            .catch(err => console.log(err));
       } else {
         done(null, e1[0].id);
       }
     })
     .catch(err => console.log(err));
});

passport.deserializeUser(function (id, done) {
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
