const router = require("express").Router();
const needRoutes = require("./needs");


// Need routes
router.use("/needs", needRoutes);

module.exports = router;
