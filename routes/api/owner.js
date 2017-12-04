const router                    = require("express").Router();
const reposOwnerController      = require("../../controllers/reposOwnerController");

// Matches with "/api/owner/:id"
router
  .route("/:id")
  .get(reposOwnerController.get)
  .put(reposOwnerController.set)
  .post(reposOwnerController.add);

module.exports = router;
