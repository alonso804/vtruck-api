"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkDuplicateDni = void 0;

var _Driver = _interopRequireDefault(require("../models/Driver"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var checkDuplicateDni = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (req, res, next) {
    try {
      var driver = yield _Driver.default.findOne({
        dni: req.body.dni.toString()
      });

      if (driver) {
        return res.status(400).json({
          ok: false,
          message: "El conductor ya existe"
        });
      }

      next();
    } catch (err) {
      console.log(err);
    }
  });

  return function checkDuplicateDni(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.checkDuplicateDni = checkDuplicateDni;