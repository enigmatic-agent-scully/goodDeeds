const router = require("express").Router();
const needRoutes = require("./Needs");

// Book routes
router.use("/Needs", needRoutes);

module.exports = router;
