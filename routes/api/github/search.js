const router  = require("express").Router();
const axios = require("axios");

const Token = require("../../../models/Token.js");

function objToQueryParams(obj) {
  const keys = Reflect.ownKeys(obj);
  return keys.reduce((a,c,i) => {
    a += `${c}=${obj[c]}`;
    a += (i === keys.length - 1) ? "" : "&";
    return a;
  }, "?");
}

const usersRoute = term => {
  const usersOptions = { type: "all", sort: "updated", direction: "desc", access_token: "84e8dc8926a8885fcf2d7f42a297e7cd0f0c4b4d" };
  return `https://api.github.com/users/${term}/repos${objToQueryParams(usersOptions)}`;
}

const orgsRoute = term => {
  const orgsOptions = { type: "all", access_token: "84e8dc8926a8885fcf2d7f42a297e7cd0f0c4b4d" };
  return `https://api.github.com/orgs/${term}/repos${objToQueryParams(orgsOptions)}`;
}

const reposRoute = term => {
  const reposOptions = { q: term, sort: "updated", order: "desc", access_token: "84e8dc8926a8885fcf2d7f42a297e7cd0f0c4b4d" };
  return `https://api.github.com/search/repositories${objToQueryParams(reposOptions)}`
}

const Repo = require("../../../src/Repo.js");

function handlerGen(routHand) {
  return (req, res) => {
    console.log("!SEARCH");
    Token.findOne({ github_id: req.github_id })
         .then(e => console.log("token!!", e));
    console.log("!SEARCH");
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
