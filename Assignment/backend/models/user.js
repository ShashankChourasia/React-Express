const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const HttpError = require("./http-error");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, required: true },
});

userSchema.plugin(uniqueValidator);

const signup = async (req, res, next) => {
  const { name, email, age } = req.body;

  if (name.length === 0 || email.length === 0 || age.length === 0) {
    return next(
      new HttpError(
        "Please check the name and password, or try again later",
        422
      )
    );
  }

  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    const error = new HttpError("Signup failed, please try again later", 500);
    return next(error);
  }

  if (existingUser) {
    const error = new HttpError(
      "User already exists, Try with some different name",
      422
    );
    return next(error);
  }

  const createdUser = new User({
    name,
    email,
    age,
  });
  try {
    await createdUser.save();
  } catch (err) {
    const error = new HttpError("Signing up failed try again later", 500);
    return next(error);
  }

  res.status(200).json({ user: createdUser });
};

module.exports = mongoose.model("User", userSchema);
exports.signup = signup;
