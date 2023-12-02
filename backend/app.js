const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

app.use(bodyParser.json());

app.use("blogs", blogsRoutes);
app.use("users", usersRoutes);

mongoose
  .connect(
    ""
  )
  .then(() => {
    app.listen(8080);
    console.log("Connected");
  })
  .catch((err) => {
    console.log(err);
  });
