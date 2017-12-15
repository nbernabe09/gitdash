const router                    = require("express").Router();
const reposCollectionController = require("../../controllers/reposCollectionController");

router
  .route("/")
  .post(reposCollectionController.add);

// Matches with "/api/collection/:id"
router
  .route("/:id")
  .get(reposCollectionController.get)
  .delete(reposCollectionController.remove);

router
  .route("/info")
  .get(reposCollectionController.info);

router
  .route("/add/:id")
  .post(reposCollectionController.addRepoByUserId);
  
module.exports = router;
