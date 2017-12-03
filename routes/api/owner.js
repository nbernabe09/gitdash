const router                    = require("express").Router();
const reposOwnerController      = require("../../controllers/reposOwnerController");

// Matches with "/api/owner/:id"
router
  .route("/:id")
  .get(reposOwnerController.getRepoOwner)
  .put(reposOwnerController.setRepoOwner)
  .post(reposOwnerController.addRepoOwner)