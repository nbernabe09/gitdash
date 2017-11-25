"use strict";

function User(respObj) {
  this.login      = respObj.login      || "NO LOGIN";
  this.id         = respObj.id         || "0000000";
  this.avatar_url = respObj.avatar_url || "http://www.dummyurl.com";
  this.html_url   = respObj.html_url   || "http://www.dummyurl.com";
}

module.exports = User;
