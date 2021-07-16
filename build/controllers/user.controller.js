"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUser = void 0;

var _User = _interopRequireDefault(require("../models/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getUser = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (req, res) {
    console.log("[USER] Get User");

    try {
      var user = yield _User.default.findById(req.params.id);
      console.log(user);

      if (!user) {
        return res.status(400).json({
          ok: false,
          message: "No existe usuario"
        });
      }

      return res.status(200).json({
        ok: true,
        user: {
          firstName: user.firstName,
          lastName: user.lastName
        }
      });
    } catch (err) {
      return res.status(500).json({
        ok: false,
        message: err
      });
    }
  });

  return function getUser(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getUser = getUser;