const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const HttpError = require("./models/http-error");
const User = require("../../backend/models/user");

dotenv.config();

const app = express();

app.use(cors());
app.use(helmet());

app.get("/users", (req, res, next) => {
  try {
    if (!USERS || USERS.length === 0) {
      const error = new Error("No users found");
      error.status = 404;
      throw error;
    }
    res.status(200).json({ users: USERS });
  } catch (error) {
    next(error);
  }
});

app.get("/user", async (req, res, next) => {
  const { email } = req.body;
  if (!email || email.length === 0 || !email.includes("@")) {
    return next(new HttpError("Invalid input", 400));
  }

  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    const error = new HttpError("Failed, please try again", 500);
    return next(error);
  }

  if (!existingUser) {
    const error = new HttpError("User not found", 403);
    return next(error);
  }
  res.status(200).json({ user: existingUser.toObject({ getters: true }) });
});

app.use((req, res, next) => {
  res.status(404).json({ error: "Endpoint not found" });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    error: err.message || "Internal Server Error",
  });
});

const PORT = process.env.PORT || 8081;

mongoose
  .connect(
    ""
  )
  .then(() => {
    app.listen(8080);
    console.log(`Listening on port ${PORT}`);
  })
  .catch((err) => {
    console.log(err);
  });

const USERS = [
  {
    email: "john.doe@example.com",
    name: "John Doe",
    age: 28,
  },
  {
    email: "jane.smith@example.com",
    name: "Jane Smith",
    age: 34,
  },
  {
    email: "bob.jones@example.com",
    name: "Bob Jones",
    age: 45,
  },
  {
    email: "alice.wilson@example.com",
    name: "Alice Wilson",
    age: 23,
  },
  {
    email: "charlie.brown@example.com",
    name: "Charlie Brown",
    age: 30,
  },
];
