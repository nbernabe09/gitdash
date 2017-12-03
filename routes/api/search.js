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

const usersRoute = term => {
  const usersOptions = { type: "all", sort: "updated", direction: "desc", access_token: "a506fda59c1626c04002965a841dc44577387571" };
  return `https://api.github.com/users/${term}/repos${objToQueryParams(usersOptions)}`;
}

const orgsRoute = term => {
  const orgsOptions = { type: "all", access_token: "a506fda59c1626c04002965a841dc44577387571" };
  return `https://api.github.com/orgs/${term}/repos${objToQueryParams(orgsOptions)}`;
}

const reposRoute = term => {
  const reposOptions = { q: term, sort: "updated", order: "desc", access_token: "a506fda59c1626c04002965a841dc44577387571" };
  return `https://api.github.com/search/repositories${objToQueryParams(reposOptions)}`
}

const genOptions = url => ({
  url: url,
  header: {
    'User-Agent': 'request'
  }
});

const Repo = require("../../src/Repo.js");

function handlerGen(routHand) {
  return (req, res) => {
    let url = routHand(req.params.term);
    console.log(url);
    axios.get(url)
    .then(function (resp) {
      console.log(resp);
      const source = resp.data.items || resp.data;
      const repos  = source.map(e => new Repo(e));
      res.json(repos);
    })
    .catch((err) => {
      console.log("ERR");
      console.log(err);
      res.json(err);
    })
  }
}

router.route("/users/:term")
  .get(handlerGen(usersRoute));

router.route("/orgs/:term")
  .get(handlerGen(orgsRoute));

router.route("/repos/:term")
  .get(handlerGen(reposRoute));

module.exports = router;
