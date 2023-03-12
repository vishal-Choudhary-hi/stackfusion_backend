const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: String,
  email: String,
  number: Number,
  dob: {
    type: Date,
    default: new Date(),
  },
});

const message = mongoose.model("message", schema);
module.exports = message;
