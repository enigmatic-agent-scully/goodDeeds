const router = require("express").Router();
const userRoutes = require('./user');
const needRoutes = require("./needs");


//User routes
router.use("/user", userRoutes);

// Need routes
router.use("/needs", needRoutes);

module.exports = router;
