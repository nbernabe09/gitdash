const router           = require("express").Router();

const githubRoutes     = require("./github");
const repoRoutes       = require("./repo.js");
const collectionRoutes = require("./collection.js");
const catnodeRoutes    = require("./catnode.js");
const languageRoutes   = require("./language.js");
const infoRoutes       = require("./info.js");
const ownerRoutes      = require("./owner.js");
const userRoutes       = require("./user.js");

router.use("/github",     githubRoutes);
router.use("/repo",       repoRoutes);
router.use("/collection", collectionRoutes);
router.use("/catnode", catnodeRoutes);
router.use("/language", languageRoutes);
router.use("/info", infoRoutes);
router.use("/owner",      ownerRoutes);
router.use("/user",       userRoutes);


module.exports = router;
