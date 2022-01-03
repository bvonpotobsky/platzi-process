const { Schema, model } = require("mongoose");

const mySchema = new Schema({
  user: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  date: Date,
});

const myModel = model("Message", mySchema);

module.exports = myModel;
