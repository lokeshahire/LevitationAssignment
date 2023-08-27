const mongoose = require("mongoose");

const formSchema = mongoose.Schema({
  name: String,
  email: String,
  phone: Number,
  address1: String,
  address2: String,
  City: String,
  State: String,
  Pincode: Number,
  Country: String,
  file: {
    type: [Object],
  },
  select: {
    type: String,
  },

  date: {
    type: String,
    default: new Date(),
  },
});

const FormModel = mongoose.model("form", formSchema);

module.exports = {
  FormModel,
};
