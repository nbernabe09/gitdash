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
  add: function(req, res) {
      const repoObj = {
        repo_id: req.body.repo_id,
        owner_id: req.body.owner,
        language: req.body.language,
        category: req.body.category
      }
      // Go Through chained CatNode creation process
      // Need to create RepoOwner -> RepoLanguage -> Repo -> RepoCatNode
      // Find or create the RepoOwner by repo_id
      db.RepoOwner
      .findOneAndUpdate({ repo_id: repoObj.repo_id },
                        { repo_id: repoObj.repo_id, owner_id: repoObj.owner_id },
                        { upsert: true, new: true })
        .then(e1 => {
          // Then find or create the RepoLanguage by repo_id
          db.RepoLanguage
            .findOneAndUpdate({ repo_id: repoObj.repo_id },
                              { repo_id: repoObj.repo_id, language: repoObj.language },
                              { upsert: true, new: true })
            .then(e2 => {
              // Now that you have RepoOwner and RepoLanguage, you can create
              // the repo object and add it to the db
              db.Repo
              .findOneAndUpdate({ repo_id: repoObj.repo_id },
                                {
                                  repo_id: repoObj.repo_id,
                                  owner_id: e1._id,
                                  language: e2._id
                                },
                                { upsert: true, new: true })
              .then(e3 => {
                db.RepoCatNode
                  .create({ repo: e3._id, category: repoObj.category })
                  .then(catnode => res.json(catnode))
                  .catch(err => res.status(422).json(err));
              })
              .catch(err => res.status(422).json(err))
            })
            .catch(err => res.status(422).json(err))
        })
        .catch(err => res.status(422).json(err))
  },
  remove: function (req, res) {
    db.RepoCatNode
      .findOneAndUpdate({ _id: req.params.id }, { $pull: { tag: req.body.tag } }, { upsert: false })
      .catch(err => res.status(422).json(err));
    res.end();
  }
}
