const router                    = require("express").Router();
const reposCollectionController = require("../../controllers/reposCollectionController");

// Matches with "/api/collection/:id"
router
  .route("/:id")
  .get(reposCollectionController.getRepoCollection)
  .post(reposCollectionController.addRepoToColl)
  .delete(reposCollectionController.removeRepoFromColl)