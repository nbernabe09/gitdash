const router  = require("express").Router();
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
  const usersOptions = { type: "all", sort: "updated", direction: "desc", access_token: "69c22fd086b86e03de5078515f8c6728df1ad119" };
  return `https://api.github.com/users/${term}/repos${objToQueryParams(usersOptions)}`;
}

const orgsRoute = term => {
  const orgsOptions = { type: "all", access_token: "69c22fd086b86e03de5078515f8c6728df1ad119" };
  return `https://api.github.com/orgs/${term}/repos${objToQueryParams(orgsOptions)}`;
}

const reposRoute = term => {
  const reposOptions = { q: term, sort: "updated", order: "desc", access_token: "69c22fd086b86e03de5078515f8c6728df1ad119" };
  return `https://api.github.com/search/repositories${objToQueryParams(reposOptions)}`
}

const Repo = require("../../../src/Repo.js");

function handlerGen(routHand) {
  return (req, res) => {
    let url = routHand(req.params.term);
    axios.get(url)
    .then(function (resp) {
      const source = resp.data.items || resp.data;
      const repos  = source.map(e => new Repo(e));
      res.json(repos);
    })
    .catch((err) => {
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
