const router                    = require("express").Router();
const reposCatNodeController    = require("../../controllers/reposCatNodeController");

// Matches with "/api/catnode/:id"
router
  .route("/:id")
  .get(reposCatNodeController.get)
  .put(reposCatNodeController.set)
  .post(reposCatNodeController.add)
  .delete(reposCatNodeController.remove);

module.exports = router;
