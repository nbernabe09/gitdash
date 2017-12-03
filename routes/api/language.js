const router                    = require("express").Router();
const reposLanguageController   = require("../../controllers/reposLanguageController");

// Matches with "/api/language/:id"
router
  .route("/:id")
  .get(reposLanguageController.getRepoLanguage)
  .put(reposLanguageController.setRepoLanguage)
  .post(reposLanguageController.addRepoLanguage)