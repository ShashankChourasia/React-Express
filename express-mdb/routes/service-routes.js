const express = require("express");
const { check } = require("express-validator");

const ServicesController = require("../controllers/services-controller");

const router = express.Router();

router.get("/services", ServicesController.getAllServices);

router.get("/services/:id", ServicesController.getServiceById);

router.post(
  "/bookings",
  [
    check("name").isLength({ min: 6 }),
    check("version").not().isEmpty(),
    check("description").not().isEmpty(),
    check("service").not().isEmpty(),
  ],
  ServicesController.bookService
);

module.exports = router;
