const router                    = require("express").Router();
const userController           = require("../../controllers/userController");

// Matches with "/api/repo/:id"
router
  .route("/:id")
  .get(userController.get);

module.exports = router;
