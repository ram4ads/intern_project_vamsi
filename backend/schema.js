const mongoose = require("mongoose");

const userSchemaValue = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: String,

    required: true,
  },

  gender: {
    type: String,

    required: true,
  },

  phoneNumber: {
    type: String,

    required: true,
  },

  email: {
    type: String,

    required: true,
  },

  password: {
    type: String,

    required: true,
  },
  confirmPassword: {
    type: String,
    required: true,
  },
  userPhoto : {
    type: String,
    required: true
  },
  userSignature : {
    type: String,
    required: true
  },
  webcamPhoto : {
    type: String,
    required: true
  }
});

const userData = mongoose.model("userData", userSchemaValue);

module.exports = userData;
