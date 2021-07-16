"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/*
 *mongoose
 *  .connect(process.env.MONGO_URL_DEV, {
 *    useNewUrlParser: true,
 *    useUnifiedTopology: true,
 *  })
 *  .then(() => console.log(`DB is connected on ${process.env.MONGO_URL_DEV}`))
 *  .catch((err) => console.error(err));
 */
var connect = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* () {
    try {
      yield _mongoose.default.connect(process.env.MONGO_URL_DEV, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
      console.log("DB is connected on ".concat(process.env.MONGO_URL_DEV));
    } catch (error) {
      handleError(error);
    }
  });

  return function connect() {
    return _ref.apply(this, arguments);
  };
}();

connect();