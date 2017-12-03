const router                    = require("express").Router();
const reposController           = require("../../controllers/reposController");

// Matches with "/api/repo/:id"
router
  .route("/:id")
  .get(reposController.getRepo)
  .post(reposController.addRepo)