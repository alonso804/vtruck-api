"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _auth = require("../controllers/auth.controller");

var _verifySignUp = require("../middlewares/verifySignUp");

var authRoutes = (0, _express.Router)();
authRoutes.post("/signin", _auth.signin);
authRoutes.post("/signup", _verifySignUp.checkDuplicateEmail, _verifySignUp.checkDuplicateUsername, _auth.signup);
var _default = authRoutes;
exports.default = _default;