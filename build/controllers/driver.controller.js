"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteDriver = exports.updateDriver = exports.getDriver = exports.getDrivers = exports.createDriver = void 0;

var _Driver = _interopRequireDefault(require("../models/Driver"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createDriver = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (req, res) {
    var {
      name,
      dni,
      vehiclePlate,
      phoneNumber,
      startDate,
      endDate,
      business,
      observations
    } = req.body;
    var newDriver = new _Driver.default({
      name,
      dni,
      vehiclePlate,
      phoneNumber,
      startDate,
      endDate,
      business,
      observations
    });
    var savedDriver = yield newDriver.save();
    console.log("[DRIVER] Saved Driver");
    console.log(savedDriver);
    return res.status(200).json({
      ok: true,
      message: "Conductor creado correctamente"
    });
  });

  return function createDriver(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createDriver = createDriver;

var getDrivers = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* (_, res) {
    var drivers = yield _Driver.default.find();
    console.log("[DRIVER] Get Drivers");
    console.log(drivers);
    return res.status(200).json({
      ok: true,
      drivers
    });
  });

  return function getDrivers(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getDrivers = getDrivers;

var getDriver = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(function* (req, res) {
    var driver = yield _Driver.default.findById(req.params.id);
    console.log("[DRIVER] Get Driver");
    console.log(driver);

    if (!driver) {
      return res.status(400).json({
        ok: false,
        message: "No existe conductor"
      });
    }

    return res.status(200).json({
      ok: true,
      driver
    });
  });

  return function getDriver(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getDriver = getDriver;

var updateDriver = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(function* (req, res) {
    var {
      name,
      dni,
      vehiclePlate,
      phoneNumber,
      startDate,
      endDate,
      business,
      observations
    } = req.body;
    var updatedDriver = yield _Driver.default.findByIdAndUpdate(req.params.id, {
      name,
      dni,
      vehiclePlate,
      phoneNumber,
      startDate,
      endDate,
      business,
      observations
    });
    console.log("[DRIVER] Updated Driver");
    console.log(updatedDriver);

    if (!updatedDriver) {
      return res.status(400).json({
        ok: false,
        message: "Conductor no existe"
      });
    }

    return res.json({
      ok: true,
      message: "Conductor actualizado correctamente"
    });
  });

  return function updateDriver(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.updateDriver = updateDriver;

var deleteDriver = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(function* (req, res) {
    var deletedDriver = yield _Driver.default.findByIdAndDelete(req.params.id);
    console.log("[DRIVER] Deleted Driver");
    console.log(deletedDriver);

    if (!deletedDriver) {
      return res.status(400).json({
        ok: false,
        message: "Conductor no existe"
      });
    }

    return res.status(200).json({
      ok: true,
      message: "Conductor eliminado correctamente"
    });
  });

  return function deleteDriver(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteDriver = deleteDriver;