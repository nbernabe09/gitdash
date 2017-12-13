const express    = require("express");
const router     = express.Router();

const passport   = require("passport");
const session    = require("express-session"),
      bodyParser = require("body-parser");
const GitHubStrategy = require('passport-github2').Strategy;
const app        = express();
const PORT       = process.env.PORT || 3001;

const { dbUri, mong } = require("./models/dbInit");
const db              = require("./models");
const MongoStore      = require('connect-mongo')(session);

const DEMO_USER_ID = 1111;

const GITHUB_CLIENT_ID = process.env.GIT_CLIENT_ID;
const GITHUB_CLIENT_SECRET = process.env.GIT_CLIENT_SECRET;

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (obj, done) {
  done(null, obj);
});

passport.use(new GitHubStrategy({
  clientID: GITHUB_CLIENT_ID,
  clientSecret: GITHUB_CLIENT_SECRET,
  callbackURL: "https://gitdash21.herokuapp.com/auth/github/callback"
},
  function (accessToken, refreshToken, profile, done) {
    // asynchronous verification, for effect... 
    process.nextTick(function () {

      // To keep the example simple, the user's GitHub profile is returned to
      // represent the logged-in user.  In a typical application, you would want
      // to associate the GitHub account with a user record in your database,
      // and return that user instead.
      return done(null, profile);
    });
  }
));

// db.User.find({ github_id: DEMO_USER_ID })
//        .then(e1 => {
//          if(e1.length === 0) {
//            db.RepoCollection
//              .create({})
//              .then(e2 => {
//                db.User.create({ github_id: DEMO_USER_ID, repo_collection: e2 })
//              })
//              .catch(err => console.log(err));
//         }
//       })

// db.User.findOneAndUpdate({github_id: DEMO_USER_ID}, {github_id: 2222});

const routes = require("./routes");

// Serve up static assets (usually on heroku)


app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
  store: new MongoStore({ mongooseConnection: mong.connection }),
  secret: "secret",
  resave: false,
  saveUninitialized: false
}));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

// router.route("*")
//   .get(ensureAuthenticated, function (req, res) {
//     if (process.env.NODE_ENV === "production") {
//       res.sendFile(path.join(__dirname, "./client/public/index.html"));
//     } else {
//       res.sendFile(path.join(__dirname, "./client/build/index.html"));
//     }
//   });


app.use(routes);
app.use(router);

app.get('/auth/github',
  passport.authenticate('github', { scope: ['user:email'] })
);

app.get('/auth/github/callback',
passport.authenticate('github', { failureRedirect: '/login' }),
function (req, res) {
  res.redirect('/');
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
} else {
  app.use(express.static("client/public"));
}

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});

function ensureAuthenticated(req, res, next) {
  console.log("ENSURE AUTHENTICATED");
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/login')
}
