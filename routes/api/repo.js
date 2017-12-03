const router                    = require("express").Router();
const reposController           = require("../../controllers/reposController");
const reposCollectionController = require("../../controllers/reposCollectionController");
const reposCatNodeController    = require("../../controllers/reposCatNodeController");
const reposLanguageController   = require("../../controllers/reposLanguage");
const reposOwnerController      = require("../../controllers/reposOwner");

router.route("/")
  .get(articlesController.findArticles)
  .post(articlesController.saveArticle)
  .delete(articlesController.deleteArticle);

module.exports = router;
