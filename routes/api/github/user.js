const router  = require("express").Router();
const axios = require("axios");

const userRoute = id => `https://api.github.com/user/${id}?access_token=69c22fd086b86e03de5078515f8c6728df1ad119`;

const Owner = require("../../../src/Owner.js");

function handlerGen(routHand) {
  return (req, res) => {
    let url = routHand(req.params.id);
    axios.get(url)
    .then(function (resp) {
      res.json(new Owner(resp.data));
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    })
  }
}

router.route("/:id")
  .get(handlerGen(userRoute));

module.exports = router;
