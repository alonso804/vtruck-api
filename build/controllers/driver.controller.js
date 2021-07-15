"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteDriver = exports.updateDriver = exports.getDriver = exports.getDrivers = exports.createDriver = void 0;

var _Driver = _interopRequireDefault(require("../models/Driver"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createDriver = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, name, dni, vehiclePlate, phoneNumber, startDate, endDate, business, observations, newDriver, savedDriver;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, dni = _req$body.dni, vehiclePlate = _req$body.vehiclePlate, phoneNumber = _req$body.phoneNumber, startDate = _req$body.startDate, endDate = _req$body.endDate, business = _req$body.business, observations = _req$body.observations;
            newDriver = new _Driver["default"]({
              name: name,
              dni: dni,
              vehiclePlate: vehiclePlate,
              phoneNumber: phoneNumber,
              startDate: startDate,
              endDate: endDate,
              business: business,
              observations: observations
            });
            _context.next = 4;
            return newDriver.save();

          case 4:
            savedDriver = _context.sent;
            console.log("[DRIVER] Saved Driver");
            console.log(savedDriver);
            return _context.abrupt("return", res.status(200).json({
              ok: true,
              message: "Conductor creado correctamente"
            }));

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createDriver(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createDriver = createDriver;

var getDrivers = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_, res) {
    var drivers;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _Driver["default"].find();

          case 2:
            drivers = _context2.sent;
            console.log("[DRIVER] Get Drivers");
            console.log(drivers);

            if (!(drivers.length === 0)) {
              _context2.next = 7;
              break;
            }

            return _context2.abrupt("return", res.status(400).json({
              ok: false,
              message: "No hay conductores"
            }));

          case 7:
            return _context2.abrupt("return", res.status(200).json({
              ok: true,
              drivers: drivers
            }));

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getDrivers(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getDrivers = getDrivers;

var getDriver = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var driver;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _Driver["default"].findById(req.params.id);

          case 2:
            driver = _context3.sent;
            console.log("[DRIVER] Get Driver");
            console.log(driver);

            if (driver) {
              _context3.next = 7;
              break;
            }

            return _context3.abrupt("return", res.status(400).json({
              ok: false,
              message: "No existe conductor"
            }));

          case 7:
            return _context3.abrupt("return", res.status(200).json({
              ok: true,
              driver: driver
            }));

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getDriver(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getDriver = getDriver;

var updateDriver = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var _req$body2, name, dni, vehiclePlate, phoneNumber, startDate, endDate, business, observations, updatedDriver;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body2 = req.body, name = _req$body2.name, dni = _req$body2.dni, vehiclePlate = _req$body2.vehiclePlate, phoneNumber = _req$body2.phoneNumber, startDate = _req$body2.startDate, endDate = _req$body2.endDate, business = _req$body2.business, observations = _req$body2.observations;
            _context4.next = 3;
            return _Driver["default"].findByIdAndUpdate(req.params.id, {
              name: name,
              dni: dni,
              vehiclePlate: vehiclePlate,
              phoneNumber: phoneNumber,
              startDate: startDate,
              endDate: endDate,
              business: business,
              observations: observations
            });

          case 3:
            updatedDriver = _context4.sent;
            console.log("[DRIVER] Updated Driver");
            console.log(updatedDriver);

            if (updatedDriver) {
              _context4.next = 8;
              break;
            }

            return _context4.abrupt("return", res.status(400).json({
              ok: false,
              message: "Conductor no existe"
            }));

          case 8:
            return _context4.abrupt("return", res.json({
              ok: true,
              message: "Conductor actualizado correctamente"
            }));

          case 9:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function updateDriver(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.updateDriver = updateDriver;

var deleteDriver = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var deletedDriver;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _Driver["default"].findByIdAndDelete(req.params.id);

          case 2:
            deletedDriver = _context5.sent;
            console.log("[DRIVER] Deleted Driver");
            console.log(deletedDriver);

            if (deletedDriver) {
              _context5.next = 7;
              break;
            }

            return _context5.abrupt("return", res.status(400).json({
              ok: false,
              message: "Conductor no existe"
            }));

          case 7:
            return _context5.abrupt("return", res.status(200).json({
              ok: true,
              message: "Conductor eliminado correctamente"
            }));

          case 8:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function deleteDriver(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteDriver = deleteDriver;