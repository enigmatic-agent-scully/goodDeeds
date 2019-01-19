const router = require("express").Router();
const needRoutes = require("./Needs");

// Need routes
router.use("/Needs", needRoutes);

module.exports = router;
