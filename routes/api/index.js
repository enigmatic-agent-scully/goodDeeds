const router = require("express").Router();
const needRoutes = require("./needs");

// Need routes
router.use("/Needs", needRoutes);

module.exports = router;
