"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkDuplicateEmail = exports.checkDuplicateUsername = void 0;

var _User = _interopRequireDefault(require("../models/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var checkDuplicateUsername = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (req, res, next) {
    var username = yield _User.default.findOne({
      username: req.body.username.toString()
    });

    if (username) {
      return res.status(400).json({
        ok: false,
        message: "El usuario ya existe"
      });
    }

    next();
  });

  return function checkDuplicateUsername(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.checkDuplicateUsername = checkDuplicateUsername;

var checkDuplicateEmail = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* (req, res, next) {
    var email = yield _User.default.findOne({
      email: req.body.email.toString()
    });

    if (email) {
      return res.status(400).json({
        ok: false,
        message: "El email ya está en uso"
      });
    }

    next();
  });

  return function checkDuplicateEmail(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.checkDuplicateEmail = checkDuplicateEmail;