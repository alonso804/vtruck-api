"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _user = require("../controllers/user.controller");

var _authJwt = require("../middlewares/authJwt");

var userRoutes = (0, _express.Router)();
userRoutes.get("/get-user/:id", _authJwt.verifyToken, _user.getUser);
var _default = userRoutes;
exports.default = _default;