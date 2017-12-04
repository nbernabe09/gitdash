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

const userRoute = id => `https://api.github.com/user/${id}`;

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
