const router        = require("express").Router();
const searchRoutes  = require("./search");

router.use("/search", searchRoutes);
router.use("/repo",   repoRoutes);

module.exports = router;
