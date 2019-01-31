const router = require("express").Router();
const needsController = require("../../controllers/needsController");

// Matches with "/api/needs"
router.route("/")
  .get(needsController.findAll)
  .post(needsController.create);

router.route("/user")
  .get(needsController.findByUser)

// Matches with "/api/needs/:id"
router.route("/:id")
  .get(needsController.findById)
  .put(needsController.update)
  .delete(needsController.remove);


module.exports = router;
