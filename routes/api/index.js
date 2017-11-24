const router        = require("express").Router();
const savedRoutes = require("./saved");
const scrapeRoutes = require("./scrape");

router.use("/saved", savedRoutes);
router.use("/scrape", scrapeRoutes);

module.exports = router;
