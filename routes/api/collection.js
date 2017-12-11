const router                    = require("express").Router();
const reposCollectionController = require("../../controllers/reposCollectionController");

// Matches with "/api/collection/:id"
router
  .route("/:id")
  .get(reposCollectionController.get)
  .post(reposCollectionController.add)
  .delete(reposCollectionController.remove);

router
  .route("/info/:id")
  .get(reposCollectionController.info);

router
  .route("/add/:id")
  .post(reposCollectionController.addRepoByUserId);
  
module.exports = router;
