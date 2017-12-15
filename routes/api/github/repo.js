const router  = require("express").Router();
const axios = require("axios");

const repoRoute = (id, token) => `https://api.github.com/repositories/${id}?access_token=${token}`;

const Repo = require("../../../src/Repo.js");
const Token = require("../../../models/Token.js");

function handlerGen(routHand) {
  return (req, res) => {
    Token.findOne({ github_id: req.user.github_id })
      .then(e => {
        let url = routHand(req.params.term, e.token);
        axios.get(url)
             .then(function (resp) {
               res.json(new Repo(resp.data));
             })
            .catch((err) => {
              console.log(err);
              res.json(err);
            })
    })
  }
}

router.route("/:id")
  .get(handlerGen(repoRoute));

module.exports = router;
