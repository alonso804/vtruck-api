"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_mongoose["default"].connect("".concat(process.env.MONGO_URL_DEV), {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function () {
  return console.log("DB is connected");
})["catch"](function (err) {
  return console.error(err);
});