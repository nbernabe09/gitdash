const express    = require("express");
const bodyParser = require("body-parser");
// const mongoose   = require("mongoose");
const routes     = require("./routes");
const app        = express();
const PORT       = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
} else {
  app.use(express.static("client/public"));
}

app.use(routes);

// mongoose.Promise = global.Promise;

// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://localhost/gitdash",
//   {
//     useMongoClient: true
//   }
// );

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
