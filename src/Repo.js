const Owner = require("./Owner.js");

function Repo(respObj) {
  this.repo_id           = respObj.id               || "0000000";
  this.name              = respObj.name             || "NO REPO NAME"
  this.owner             = new Owner(respObj.owner);
  this.html_url          = respObj.html_url         || "http://www.dummyurl.com";
  this.forks             = respObj.forks            || 0;
  this.open_issues       = respObj.open_issues      || 0;
  this.watchers_count    = respObj.watchers_count   || 0;
  this.clone_url         = respObj.clone_url        || "";
  this.language          = respObj.language         || "";
  this.updated_at        = respObj.updated_at       || "";
  this.description       = respObj.description      || "";
  this.stargazers_count  = respObj.stargazers_count || 0;
}

module.exports = Repo;
