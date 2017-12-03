const db = require("../models");

module.exports = {
  get: function(req, res) {
    db.RepoCatNode
      .find({_id: req.params.id})
      .then(ret => res.json(ret))
      .catch(err => res.status(422).json(err));
  },
  set: function(req, res) {
    const obj = {
      category: req.body.category
    }
    db.RepoCatNode
      .findOneAndUpdate({ _id: req.params.id }, obj, { upsert: false })
      .catch(err => res.status(422).json(err));
      res.end();
  },
  add: function (req, res) {
    db.RepoCatNode
      .findOneAndUpdate({ _id: req.params.id }, { $push: { tag: req.body.tag } }, { upsert: false })
      .catch(err => res.status(422).json(err));
    res.end();
  },
  remove: function (req, res) {
    db.RepoCatNode
      .findOneAndUpdate({ _id: req.params.id }, { $pull: { tag: req.body.tag } }, { upsert: false })
      .catch(err => res.status(422).json(err));
    res.end();
  }
}
