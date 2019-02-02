const db = require("../models");

// Defining methods message controller
module.exports = {
  findAll: function (req, res) {
    db.Message
      .find({
        need: req.query.needId
      })
      .populate("user", {
        _id: true,
        firstName: true,
        lastName: true,
        userName: true
      })
      .sort({ postdate: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Message
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    const newMessage = req.body;
    newMessage.user = req.session.user._id
    db.Message
      .create(newMessage)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Message
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Message
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
