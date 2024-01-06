const { v4: uuid } = require("uuid");
const { validationResult } = require("express-validator");

const HttpError = require("../models/http-error");

const DUMMY_DATA = [
  {
    id: uuid(),
    name: "Database",
    version: "1.0.0",
    description:
      "MongoDB is a source-available, cross-platform, document-oriented database program. Classified as a NoSQL database product, MongoDB utilizes JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc. and current versions are licensed under the Server Side Public License.",
    service: "Storage",
  },
  {
    id: uuid(),
    name: "REST",
    version: "1.0.0",
    description:
      "REST stands for Representational State Transfer, and is a set of rules that govern how web service applications communicate over the internet. RESTful APIs are APIs that follow these rules, and provide speed, bandwidth, and flexibility advantages to communications and software integrations.",
    service: "Web services",
  },
  {
    id: uuid(),
    name: "React",
    version: "1.0.0",
    description:
      "React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js.",
    service: "UI",
  },
];

const getAllServices = (req, res, next) => {
  res.status(200).json({ services: DUMMY_DATA });
};

const getServiceById = (req, res, next) => {
  const serviceId = req.params.id;

  const service = DUMMY_DATA.filter((ser) => ser.id === +serviceId);
  console.log(service);
  if (service.length === 0) {
    return next(new HttpError("Service with the given id not found", 404));
  }
  res.status(200).json({ service });
};

const bookService = (req, res, next) => {
  const error = validationResult(req);

  if (!error.isEmpty()) {
    return next(
      new HttpError("Invalid inputs passed try with valid inputs", 422)
    );
  }

  const { name, version, description, service } = req.body;

  const id = uuid();

  const createdService = {
    id,
    name,
    version,
    description,
    service,
  };
  DUMMY_DATA.push(createdService);

  res.status(201).json({
    message: "New service created successfully",
    service: createdService,
  });
};

exports.getAllServices = getAllServices;
exports.getServiceById = getServiceById;
exports.bookService = bookService;
