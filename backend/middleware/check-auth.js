const jwt = require("jsonwebtoken");
const HttpError = require("../../Assignment/backend/models/http-error");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1]; // Authorization: 'Bearer TOKEN'
    if (!token) {
      throw new Error("Authentication Failed");
    }
    const decodedToken = jwt.verify(token, "supersecret_dont_share");
    req.userData = { userId: decodedToken.userId };
    next()
  } catch (err) {
    const error= new HttpError("Autentication failed", 403);
    return next(error);
  }
};
