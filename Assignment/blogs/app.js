const fs = require("fs");
const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const postsRoutes = require("./routes/posts-routes");
const usersRoutes = require("./routes/users-routes");

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use("/uploads/images", express.static(path.join("uploads", "images")));

app.use("/posts", postsRoutes);
app.use("/users", usersRoutes);

app.use((req, res, next) => {
  const error = new HttpError("Could not find this route.", 404);
  next(error);
});

app.use((error, req, res, next) => {
  if (req.file) {
    fs.unlink(req.file.path, (err) => console.log(err));
  }
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred!" });
});

mongoose
  .connect("")
  .then(() => {
    app.listen(8080);
    console.log("Connected");
  })
  .catch((err) => {
    console.log(err);
  });
