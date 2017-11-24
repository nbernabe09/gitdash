const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

router.route("/")
  .get(articlesController.findArticles)
  .post(articlesController.saveArticle)
  .delete(articlesController.deleteArticle);

module.exports = router;
