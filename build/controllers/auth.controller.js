"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signin = exports.signup = void 0;

var _User = _interopRequireDefault(require("../models/User"));

var _Role = _interopRequireDefault(require("../models/Role"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = _interopRequireDefault(require("../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var signup = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (req, res) {
    console.log("[SIGN UP] Saved User");

    try {
      var {
        firstName,
        lastName,
        username,
        email,
        password,
        roles
      } = req.body;
      var newUser = new _User.default({
        firstName,
        lastName,
        username,
        email,
        password: yield _User.default.encryptPassword(password)
      });

      if (roles) {
        var foundRoles = yield _Role.default.find({
          name: {
            $in: roles.map(role => role.toString())
          }
        });
        newUser.roles = foundRoles.map(role => role._id);
      } else {
        var role = yield _Role.default.findOne({
          name: "user"
        });
        newUser.roles = [role._id];
      }

      var savedUser = yield newUser.save();
      console.log(savedUser);

      var token = _jsonwebtoken.default.sign({
        id: savedUser._id
      }, _config.default.SECRET, {
        expiresIn: 86400 // 24 hrs

      });

      return res.status(200).json({
        token,
        ok: true,
        message: "Cliente creado correctamente"
      });
    } catch (err) {
      return res.status(500).json({
        ok: false,
        message: err
      });
    }
  });

  return function signup(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.signup = signup;

var signin = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* (req, res) {
    console.log("[SIGN IN] Saved User");

    try {
      var userFound = yield _User.default.findOne({
        username: req.body.username.toString()
      }).populate("roles");

      if (!userFound) {
        return res.status(400).json({
          ok: false,
          message: "Usuario no encontrado"
        });
      }

      var matchPassword = yield _User.default.comparePassword(req.body.password, userFound.password);

      if (!matchPassword) {
        return res.status(401).json({
          ok: false,
          message: "Contraseña incorrecta"
        });
      }

      var token = _jsonwebtoken.default.sign({
        id: userFound._id
      }, _config.default.SECRET, {
        expiresIn: 86400
      });

      console.log(userFound);
      return res.status(200).json({
        ok: true,
        message: "Usuario encontrado",
        token,
        userId: userFound._id
      });
    } catch (err) {
      return res.status(500).json({
        ok: false,
        message: err
      });
    }
  });

  return function signin(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.signin = signin;