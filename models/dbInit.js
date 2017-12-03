"use strict";

const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const dbURI = process.env.MONGODB_URI || "mongodb://localhost/gitdash";

mongoose.connect(dbURI,
  {
    useMongoClient: true
  }
);

mongoose.connection.on('connected', function () {
  console.log('Mongoose connected to ' + dbURI);
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
