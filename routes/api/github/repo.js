const router  = require("express").Router();
const axios = require("axios");

const repoRoute = id => `https://api.github.com/repositories/${id}?access_token=6fb5bbf4abe81a797c4a3569b4f9ab78c2f290f1`;

const Repo = require("../../../src/Repo.js");

function handlerGen(routHand) {
  return (req, res) => {
    let url = routHand(req.params.id);
    axios.get(url)
    .then(function (resp) {
      res.json(new Repo(resp.data));
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    })
  }
}

router.route("/:id")
  .get(handlerGen(repoRoute));

module.exports = router;
