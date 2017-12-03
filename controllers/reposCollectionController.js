const db = require("../models");

module.exports = {
  getRepoCollection: function(req, res) {
    const repoColl = req.params.id;
    db.RepoCollection
      .find({ _id: repoColl })
      .then(ret => res.json(ret))
      .catch(err => res.status(422).json(err));
  },
  addRepoToColl: function (req, res) {
    db.RepoCollection
      .findOneAndUpdate({ _id: req.params.id }, { $push: { tag: req.body.repo_id } }, { upsert: false })
      .catch(err => res.status(422).json(err));
    res.end();
  },
  removeRepoFromColl: function (req, res) {
    db.RepoCollection
      .findOneAndUpdate({ _id: req.params.id }, { $pull: { tag: req.body.repo_id } }, { upsert: false })
      .catch(err => res.status(422).json(err));
    res.end();
  }
}
