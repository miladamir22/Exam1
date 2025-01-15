const { Schema } = require("mongoose");

const userSchema = new Schema({
  imgUrl: {
    required: true,
    type: String,
  },
  title: {
    required: true,
    type: String,
  },
  description: {
    required: true,
    type: String,
  },
  country: {
    required: true,
    type: String,
  },
});

module.exports = userSchema;
