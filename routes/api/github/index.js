const router           = require("express").Router();

const searchRoutes     = require("./search.js");
const userRoutes       = require("./user.js");
const repoRoutes       = require("./repo.js");


router.use("/search", searchRoutes);
router.use("/user",   userRoutes);
router.use("/repo",   repoRoutes);

module.exports = router;
