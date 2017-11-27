"use strict";

function Owner(respObj) {
  this.login      = respObj.login      || "NO LOGIN";
  this.owner_id   = respObj.id         || "0000000";
  this.avatar_url = respObj.avatar_url || "http://www.dummyurl.com";
  this.html_url   = respObj.html_url   || "http://www.dummyurl.com";
}

module.exports = Owner;
