"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var driverSchema = new _mongoose.Schema({
  name: String,
  dni: String,
  vehiclePlate: String,
  phoneNumber: String,
  startDate: String,
  endDate: String,
  business: String,
  observations: String
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)("Driver", driverSchema);

exports["default"] = _default;