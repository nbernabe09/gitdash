const db = require("../models");

module.exports = {
  findArticles: function(req, res) {
    db.Article
      .find({})
      .then(dbArticle => res.json(dbArticle))
      .catch(err => res.status(422).json(err));
  },
  saveArticle: function(req, res) {
    let article = req.body;
    db.Article
      .findOneAndUpdate({ headline: article.headline }, article, { upsert: true })
      .catch(err => res.json(err))
      res.end();
  },
  deleteArticle: function(req, res) {
    db.Article
      .findOne({ _id: req.query.id})
      .remove()
      .exec();
    res.end();
  }
}
