const db = require("../models");

function gatherUnique() {
  let m = new Set
}

module.exports = {
  get: function(req, res) {
    db.RepoCollection
      .find({ _id: req.params.id })
      .then(ret => res.json(ret))
      .catch(err => res.status(422).json(err));
  },
  add: function (req, res) {
    db.RepoCollection
      .findByIdAndUpdate({ _id: req.params.id },
                         { $push: { repos: req.body.catnode_id } },
                         { upsert: false })
      .catch(err => res.status(422).json(err));
    res.end();
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
      .catch(err => console.log(err));
  },
  info: function(req, res) {
    db.RepoCollection
      .findById(req.params.id)
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
      .catch(err => console.log(err));
  },
}
