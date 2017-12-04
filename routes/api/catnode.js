const router                    = require("express").Router();
const reposCatNodeController    = require("../../controllers/reposCatNodeController");

// Matches with "/api/catnode/:id"
router
  .route("/")
  .post(reposCatNodeController.add)

router
  .route("/:id")
  .get(reposCatNodeController.get)
  .put(reposCatNodeController.set)
  .delete(reposCatNodeController.remove);


module.exports = router;
