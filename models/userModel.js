const mongoose = require("mongoose");

const dbschema = new mongoose.Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    gender: { type: String, required: true },
  },
  { timestamps: true }
);


const User = mongoose.model("User", dbschema);
module.exports = { User };
