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
    description: "Take me here.",
    resolved: "false",
    lat: 33.7789889,
    lng: -84.347168,
    imageurl: "https://s3.amazonaws.com/gooddeedsimages/test-image.jpg"
  },
  {
    category: "Cleaning Up",
    resolved: "false",
    description: "My place is a mess!  Please help.",
    lat: 33.763382,
    lng: -84.3951098,
    imageurl: "https://gooddeedsimages.s3.amazonaws.com/messyhouse.jpg"
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
