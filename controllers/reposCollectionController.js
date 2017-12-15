const db = require("../models");

module.exports = {
  get: function(req, res) {
    db.RepoCollection
      .find({ _id: req.params.id })
      .then(ret => res.json(ret))
      .catch(err => res.status(422).json(err));
  },
  add: function (req, res) {
    db.RepoCollection
      .findByIdAndUpdate({ _id: req.user.repo_collection },
                         { $push: { repos: req.body.catnode_id } },
                         { upsert: false, new: true }, (err, resp) => {
                           res.json(resp);
                         })
  },
  addRepoByUserId: function(req, res) {
    db.User.find({ github_id: req.params.id })
           .then(user => {
             let colId = user[0].repo_collection;
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
                           .then(catnode => {
                             console.log(catnode);
                             db.RepoCollection
                               .findByIdAndUpdate(colId,
                                                  { $push: { repos: catnode._id } },
                                                  { upsert: false, new: true }, (err, res) => {
                                                    res.json(res);
                                                  })
                           })
                           .catch(err => res.status(422).json(err));
                       })
                       .catch(err => res.status(422).json(err))
                   })
                   .catch(err => res.status(422).json(err))
               })
               .catch(err => res.status(422).json(err))
             db.RepoCollection
             res.end();
           })
  },
  remove: function (req, body) {
    db.RepoCollection
      .findByIdAndUpdate({ _id: req.params.id },
                         { $pull: { repos: req.body.catnode_id } },
                         { upsert: false })
      .catch(err => res.status(422).json(err));
    res.end();
  },
  categories1: function(req, res) {
    db.RepoCollection
      .findById(req.params.id)
      .populate("repos")
      .then(resp => {
        let out = resp.repos.reduce((a, c) => a.add(c.category), new Set());
        res.json(Array.from(out));
      })
      .catch(err => res.status(422).json(err));
  },
  info: function(req, res) {
    db.RepoCollection
      .findById(req.user.repo_collection)
      .populate({
        path: 'repos',
        populate: {
          path: 'repo',
          populate: { path: 'language' }
        }
      })
      .populate({
        path: 'repos',
        populate: {
          path: 'repo',
          populate: { path: 'owner_id' }
        }
      })
      .then(resp => {
        const owners      = {};
        const languages   = {};
        const categories  = {};
        for(const x of resp.repos) {
          let owner = x.repo.owner_id.owner_id + "";
          if(!owners[owner]) owners[owner] = [];
          owners[owner].push(x.repo.repo_id);

          let category = x.category + "";
          if (!categories[category]) categories[category] = [];
          categories[category].push(x.repo.repo_id);

          let language  = x.repo.language.language + "";
          if (!languages[language]) languages[language] = [];
          languages[language].push(x.repo.repo_id);
        }

        const outObj = {
          owners: owners,
          languages: languages,
          categories: categories
        }
        res.json(outObj);
      })
      .catch(err => res.status(422).json(err));
  },
}
