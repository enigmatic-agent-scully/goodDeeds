const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  subject: { type: String,required: false },  
  text: { type: String, required: true },
  postdate: {  type : Date, default: Date.now},
  user: { type: Schema.Types.ObjectId,ref: "User"},
  need: { type: Schema.Types.ObjectId,ref: "Need"}
});

// This creates our model from the above schema, using mongoose's model method
var Message = mongoose.model("Message", MessageSchema);

// Export the Article model
module.exports = Message;
