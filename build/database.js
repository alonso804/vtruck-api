"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose.default.connect(process.env.MONGO_URL_DEV, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("DB is connected on ".concat(process.env.MONGO_URL_DEV))).catch(err => console.error(err));
/*
 *const connect = async () => {
 *  try {
 *    await mongoose.connect(process.env.MONGO_URL_DEV, {
 *      useNewUrlParser: true,
 *      useUnifiedTopology: true,
 *    });
 *
 *    console.log(`DB is connected on ${process.env.MONGO_URL_DEV}`);
 *  } catch (error) {
 *    handleError(error);
 *  }
 *};
 *
 *connect();
 */