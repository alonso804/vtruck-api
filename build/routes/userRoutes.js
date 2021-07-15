"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _user = require("../controllers/user.controller");

var userRoutes = (0, _express.Router)();
userRoutes.get("/get-user/:id", _user.getUser);
var _default = userRoutes;
exports["default"] = _default;