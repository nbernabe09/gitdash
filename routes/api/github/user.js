const router  = require("express").Router();
const axios = require("axios");

const userRoute = (id, token) => `https://api.github.com/user/${id}?access_token=${token}`;

const Token = require("../../../models/Token.js");
const Owner = require("../../../src/Owner.js");

function handlerGen(routHand) {
  return (req, res) => {
    Token.findOne({ github_id: req.user.github_id })
      .then(e => {
        console.log("FOUND TOKEN");
        let url = routHand(req.params.term, e.token);
        axios.get(url)
          .then(function (resp) {
            res.json(new Owner(resp.data));
          })
          .catch((err) => {
            console.log(err);
            res.json(err);
          })
      })
  }
}

router.route("/:id")
  .get(handlerGen(userRoute));

module.exports = router;
