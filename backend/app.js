const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

app.use(bodyParser.json());

app.use("blogs", blogsRoutes);
app.use("users", usersRoutes);

mongoose
  .connect(
    "mongodb+srv://shashankchourasia1706:9bivZexGyodpwdKT@cluster0.7dp9klx.mongodb.net/blogs?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(8080);
    console.log("Connected");
  })
  .catch((err) => {
    console.log(err);
  });
