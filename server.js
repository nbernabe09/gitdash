const express    = require("express");
const session    = require("express-session"),
      bodyParser = require("body-parser");
const app        = express();
const PORT       = process.env.PORT || 3001;
const passport   = require("passport");

const { dbUri, mong } = require("./models/dbInit");
const db              = require("./models");
const MongoStore      = require('connect-mongo')(session);

const DEMO_USER_ID = 1111;

db.User.find({ github_id: DEMO_USER_ID })
       .then(e1 => {
         if(e1.length === 0) {
           db.RepoCollection
             .create({})
             .then(e2 => {
               db.User.create({ github_id: DEMO_USER_ID, repo_collection: e2 })
             })
             .catch(err => console.log(err));
        }
      })
      .catch(err => console.log(err));

const routes = require("./routes");

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
} else {
  app.use(express.static("client/public"));
}

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

app.use(routes);

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
