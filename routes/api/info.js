const router                    = require("express").Router();
const reposCollectionController = require("../../controllers/reposCollectionController");

router
  .route("/")
  .get(reposCollectionController.info);
  
module.exports = router;
