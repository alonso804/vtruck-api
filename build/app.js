"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _package = _interopRequireDefault(require("../package.json"));

var _cors = _interopRequireDefault(require("cors"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _initialSetup = require("./libs/initialSetup");

var _authRoutes = _interopRequireDefault(require("./routes/authRoutes"));

var _driverRoutes = _interopRequireDefault(require("./routes/driverRoutes"));

var _userRoutes = _interopRequireDefault(require("./routes/userRoutes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.disable("x-powered-by");

_dotenv["default"].config();

(0, _initialSetup.createRoles)();
app.set("pkg", _package["default"]);
app.use((0, _morgan["default"])("dev"));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use((0, _cors["default"])({
  origin: "http://localhost:3000"
}));
app.get("/", function (_, res) {
  res.json({
    name: app.get("pkg").name,
    author: app.get("pkg").author,
    description: app.get("pkg").description,
    version: app.get("pkg").version
  });
});
app.use("/api/auth", _authRoutes["default"]);
app.use("/api/driver", _driverRoutes["default"]);
app.use("/api/user", _userRoutes["default"]);
var _default = app;
exports["default"] = _default;