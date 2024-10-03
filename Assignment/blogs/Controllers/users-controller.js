const { validationResult } = require("express-validator");
const bycrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const HttpError = require("../../Assignment/backend/models/http-error");

const User = require("../models/user");

const signup = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError(
        "Please check the name and password, or try again later",
        422
      )
    );
  }
  const { name, email, password } = req.body;

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
  let hashedPassword;
  try {
    hashedPassword = await bycrypt.hash(password, 12);
  } catch (err) {
    const error = new HttpError("Coudn't create user, please try again", 500);
    return next(error);
  }

  const createdUser = new User({
    name,
    email,
    password: hashedPassword,
    places: [],
  });
  try {
    await createdUser.save();
  } catch (err) {
    const error = new HttpError("Signing up failed try again later", 500);
    return next(error);
  }

  let token;
  try {
    token = jwt.sign(
      { userId: createdUser.id, email: createdUser.email },
      "supersecret_dont_share",
      { expiresIn: "1h" }
    );
  } catch (err) {
    const error = new HttpError(
      "Signing up failed, please try again later.",
      500
    );
    return next(error);
  }

  // const responseUser = createdUser.toObject({ getters: true });
  // delete responseUser.password;

  res.status(200).json({ userId: createdUser.id, token: token });
};

const login = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return next(
      new HttpError("Invalid input, please try with valid credentials", 422)
    );
  }

  const { email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    const error = new HttpError("Login failed, please try again", 500);
    return next(error);
  }
  if (!existingUser) {
    const error = new HttpError("User not found", 403);
    return next(error);
  }
  let isValidPassword = false;
  try {
    isValidPassword = await bycrypt.compare(password, existingUser.password);
  } catch (err) {
    const error = new HttpError(
      "Couldn't log you in, please try again later",
      422
    );
    return next(error);
  }

  if (!isValidPassword) {
    return next(new HttpError("Invalid credentials", 403));
  }

  let token;
  try {
    token = jwt.sign(
      { userId: existingUser.id, email: email },
      "supersecret_dont_share",
      { expiresIn: "1h" }
    );
  } catch (err) {
    const error = new HttpError(
      "Signing up failed, please try again later.",
      500
    );
    return next(error);
  }

  res.status(200).json({
    userId: existingUser.id,
    token: token,
  });
};

exports.signup = signup;
exports.login = login;
