const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const serviceRoutes = require("./routes/service-routes");
const HttpError = require("./models/http-error");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use("/api", serviceRoutes);

app.use((req, res, next) => {
  const error = new HttpError("Route not found", 404);
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown errror occured" });
});

app.listen(8080, () => {
  console.log("listening on port 8080");
});
