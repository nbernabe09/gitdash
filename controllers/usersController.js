const db = require("../models");

module.exports = {
  get: function(req, res) {
    db.User
      .find({ _id: req.params.id })
      .then(user => res.json(user))
      .catch(err => res.status(422).json(err));
  }
}
