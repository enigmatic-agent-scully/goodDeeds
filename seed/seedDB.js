const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/gooddeedsdb"
);

const needSeed = [
  {
    category: "Getting Around",
    description: "I need to get to the doctors"
  },
  {
    category: "Cleaning Up",
    description: "Help clean out shed"
  }
];

db.Need
  .remove({})
  .then(() => db.Need.collection.insertMany(needSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
