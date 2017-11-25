const router  = require("express").Router();
const request = require("request");
const axios = require("axios");

function objToQueryParams(obj) {
  const keys = Reflect.ownKeys(obj);
  return keys.reduce((a,c,i) => {
    a += `${c}=${obj[c]}`;
    a += (i === keys.length - 1) ? "" : "&";
    return a;
  }, "?");
}

const userRoute = term => {
  const userOptions = { type: "all", sort: "updated", direction: "desc" };
  return `https://api.github.com/users/${term}/repos${objToQueryParams(userOptions)}`;
}

const orgRoute = term => {
  const orgOptions = { type: "all" };
  return `http://api.github.com/orgs/${term}/repos${objToQueryParams(orgOptions)}`;
}

const repoRoute = term => {
  const repoOptions = { q: term, sort: "updated", order: "desc" };
  return `http://api.github.com/search/repositories${objToQueryParams(repoOptions)}`
}

const genOptions = url => ({
  url: url,
  header: {
    'User-Agent': 'request'
  }
});

const Repo = require("../../src/Repo.js");

function handlerGen(routHand) {
  return (req, res) =>
      axios.get(routHand(req.params.term))
      .then(function (resp) {
        const repos = resp.data.map(e => new Repo(e));
        res.json(repos);
      })
      .catch((err) => {
        res.json(err);
      })
}

router.route("/user/:term")
  .get(handlerGen(userRoute));

router.route("/org/:term")
  .get(handlerGen(orgRoute));

router.route("/repo/:term")
  .get(handlerGen(repoRoute));

module.exports = router;
