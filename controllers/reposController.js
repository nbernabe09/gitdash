const db = require("../models");

module.exports = {
  get: function(req, res) {
    const id = req.params.id;
    db.RepoOwner
      .find({repo_id: id})
      .then(repo => res.json(repo))
      .catch(err => res.status(422).json(err));
  }
}
