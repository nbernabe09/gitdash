const router                    = require("express").Router();
const reposCollectionController = require("../../controllers/reposCollectionController");

// Matches with "/api/collection/:id"
router
  .route("/:id")
  .get(reposCollectionController.get)
  .post(reposCollectionController.add)
  .delete(reposCollectionController.remove);

router
  .route("/categories/:id")
  .get(reposCollectionController.categories);
  
module.exports = router;
