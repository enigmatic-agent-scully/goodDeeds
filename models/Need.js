const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NeedSchema = new Schema({
  category: { type: String, required: true },
  description: { type: String, required: false },
  needdate: {  type : Date, default: Date.now() },
  imageurl: { type: String, required: false },
  resolved: { type: Boolean, default: false },
  user: { type: Schema.Types.ObjectId, ref: "User" },
  message: { type: Schema.Types.ObjectId, ref: "Message" }
});

// This creates our model from the above schema, using mongoose's model method
var Need = mongoose.model("Need", NeedSchema);

// Export the Article model
module.exports = Need;
