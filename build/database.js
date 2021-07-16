"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose.default.connect("".concat(process.env.MONGO_URL_DEV), {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("DB is connected")).catch(err => console.error(err));