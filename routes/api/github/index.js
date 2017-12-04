const router           = require("express").Router();

const searchRoutes     = require("./search.js");
const userRoutes      = require("./user.js");

router.use("/search", searchRoutes);
router.use("/user",  userRoutes);

module.exports = router;
