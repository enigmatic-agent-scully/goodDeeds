const router = require("express").Router();
const needRoutes = require("./needs");
const userRoutes = require('./user');
const messageRoutes = require('./message');
const userController = require("../../controllers/userControllers")

// Require authentication for all the endpoints, expect the public routes
router.use(userController.checkApiAuthentication) // userController.checkApiAuthentication.bind(userController)

//User routes
router.use("/user", userRoutes);

// //messsage routes
router.use("/message", messageRoutes);

// Need routes
router.use("/needs", needRoutes);

module.exports = router;
