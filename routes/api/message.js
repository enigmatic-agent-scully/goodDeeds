const router = require('express').Router();
const messageController = require('../../controllers/messageController');

router
  .route('/')
  .post(messageController.create)
  .get(messageController.findAll);

router.route('/:id').delete(messageController.remove);

module.exports = router;
