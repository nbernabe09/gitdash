const express    = require("express");
const session    = require("express-session"),
      bodyParser = require("body-parser");
const routes     = require("./routes");
const app        = express();
const cookiePar
const PORT       = process.env.PORT || 3001;
const passport   = require("passport");

require("./models/dbInit")
const db         = require("./models");

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
} else {
  app.use(express.static("client/public"));
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({ secret: "cats" }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

app.use(routes);

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
