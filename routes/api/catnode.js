const router                    = require("express").Router();
const reposCatNodeController    = require("../../controllers/reposCatNodeController");

// Matches with "/api/catnode/:id"
router
  .route("/:id")
  .get(reposCatNodeController.getRepoCatNode)
  .put(reposCatNodeController.setRepoCatNodeCategory)
  .post(reposCatNodeController.addRepoCatNodeTag)
  .delete(reposCatNodeController.removeRepoCatNodeTag)