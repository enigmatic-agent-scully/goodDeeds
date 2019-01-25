const router = require("express").Router();
const needRoutes = require("./needs");
const userRoutes = require('./user');


//User routes
router.use("/user", userRoutes);

// Need routes
router.use("/needs", needRoutes);

module.exports = router;
