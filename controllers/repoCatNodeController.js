const db = require("../models");

module.exports = {
  getRepoCatNode: function(req, res) {
    const repoCatId = req.params.id;
    db.RepoCatNode
      .find({_id: repoCatId})
      .then(ret => res.json(ret))
      .catch(err => res.status(422).json(err));
  },
  setRepoCatNodeCategory: function(req, res) {
    const obj = {
      category: req.body.category
    }
    db.RepoCatNode
      .findOneAndUpdate({ _id: req.params.id }, obj, { upsert: false })
      .catch(err => res.status(422).json(err));
      res.end();
  },
  addRepoCatNodeTag: function (req, res) {
    db.RepoCatNode
      .findOneAndUpdate({ _id: req.params.id }, { $push: { tag: req.body.tag } }, { upsert: false })
      .catch(err => res.status(422).json(err));
    res.end();
  },
  removeRepoCatNodeTag: function (req, res) {
    db.RepoCatNode
      .findOneAndUpdate({ _id: req.params.id }, { $pull: { tag: req.body.tag } }, { upsert: false })
      .catch(err => res.status(422).json(err));
    res.end();
  }
}
