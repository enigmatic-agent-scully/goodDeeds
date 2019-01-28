const router = require("express").Router();
const messageController = require("../../controllers/messageController");


router.route('/')
    .post(messageController.create)
    .get(messageController.findAll)

module.exports = router;