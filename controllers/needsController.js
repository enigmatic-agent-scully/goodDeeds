const db = require('../models');

// Defining methods for the booksController
module.exports = {
  findAll: (req, res) => {
    db.Need.find({})
      .populate('user', {
        _id: true,
        firstName: true,
        lastName: true,
        userName: true,
        imageurl: true
      })
      .sort({ postdate: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: (req, res) => {
    db.Need.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findBySearch: (req, res) => {
    console.log('made it');
    console.log(req.query);

    db.Need.find({
      category: req.query.category
    })
      .sort({ postdate: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByCurrentUser: (req, res) => {
    console.log(req.session.user._id);
    db.Need.find({
      user: req.session.user._id
    })
      .sort({ date: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: (req, res) => {
    console.log(req);
    const newNeed = req.body;
    newNeed.user = req.session.user._id;
    db.Need.create(newNeed)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: (req, res) => {
    db.Need.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: (req, res) => {
    db.Need.findOneAndDelete({ _id: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  donateToANeed: (req, res) => {
    const goodSamaritin = {
      id: req.session.user._id,
      userName: req.session.user.userName
    }
    db.Need.findOneAndUpdate({ _id: req.body.needId },
      { $push: { contributor: goodSamaritin } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }

};
