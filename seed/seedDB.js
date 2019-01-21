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
    description: "I need to get to the doctors",
    lat: 51.506,
    lng: -0.092
  },
  {
    category: "Cleaning Up",
    description: "Help clean out shed",
    lat: 51.5062,
    lng: -0.0912
  },
  {
    category: "Fixing Something",
    description: "My sink broke",
    lat: 51.504,
    lng: -0.093
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
