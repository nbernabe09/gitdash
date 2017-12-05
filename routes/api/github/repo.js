const router  = require("express").Router();
const axios = require("axios");

const repoRoute = id => `https://api.github.com/repositories/${id}?access_token=84e8dc8926a8885fcf2d7f42a297e7cd0f0c4b4d`;

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
