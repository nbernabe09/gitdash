const router                    = require("express").Router();
const reposLanguageController   = require("../../controllers/reposLanguageController");

// Matches with "/api/language/:id"
router
  .route("/:id")
  .get(reposLanguageController.get)
  .put(reposLanguageController.set)
  .post(reposLanguageController.add);

module.exports = router;
