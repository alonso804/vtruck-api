"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _driver = require("../controllers/driver.controller");

var _verifyDriver = require("../middlewares/verifyDriver");

var _authJwt = require("../middlewares/authJwt");

var driverRoutes = (0, _express.Router)();
driverRoutes.post("/create-driver", _authJwt.verifyToken, _verifyDriver.checkDuplicateDni, _driver.createDriver);
driverRoutes.get("/get-drivers", _authJwt.verifyToken, _driver.getDrivers);
driverRoutes.get("/get-driver/:id", _authJwt.verifyToken, _driver.getDriver);
driverRoutes.put("/update-driver/:id", _authJwt.verifyToken, _driver.updateDriver);
driverRoutes.delete("/delete-driver/:id", _authJwt.verifyToken, _driver.deleteDriver);
var _default = driverRoutes;
exports.default = _default;