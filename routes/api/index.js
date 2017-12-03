const router        = require("express").Router();
const searchRoutes  = require("./search");
const repoRoutes  = require("./repo");
const collectionRoutes  = require("./collection");
const catnodeRoutes  = require("./catnode");
const languageRoutes  = require("./language");
const ownerRoutes  = require("./owner");


router.use("/search", searchRoutes);
router.use("/repo",   repoRoutes);
router.use("/collection",   collectionRoutes);
router.use("/catnode",   catnodeRoutes);
router.use("/language",   languageRoutes);
router.use("/owner",   ownerRoutes);

module.exports = router;