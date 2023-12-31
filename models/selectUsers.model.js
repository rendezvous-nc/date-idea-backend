const db = require("../connection.js");
const mongoose = require("mongoose");
const usersSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    age: { type: Number, required: true },
    avatar: { type: String, required: true },
  },
  { versionKey: false }
);

const user = mongoose.model("users", usersSchema);

const selectAllUsers = () => {
  return user.find({}).then((usersData) => {
    return usersData;
  });
};

module.exports = { selectAllUsers, user };
