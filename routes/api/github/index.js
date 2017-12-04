const router           = require("express").Router();

const searchRoutes     = require("./search.js");

router.use("/search",     searchRoutes);

module.exports = router;
