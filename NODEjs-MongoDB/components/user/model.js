const { Schema, model } = require("mongoose");

const mySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

const myModel = model("User", mySchema);

module.exports = myModel;
