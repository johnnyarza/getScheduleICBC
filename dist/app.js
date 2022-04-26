"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _youch = require('youch'); var _youch2 = _interopRequireDefault(_youch);
var _routes = require('./routes'); var _routes2 = _interopRequireDefault(_routes);
require('dotenv/config');

class App {
  constructor() {
    this.server = _express2.default.call(void 0, );
    this.routes();
  }

  middlewares() {
    this.server.use(_express2.default.json());
  }

  routes() {
    this.server.use(_routes2.default);
    this.server.use(this.defaultErrorHandler);
  }

  async defaultErrorHandler(err, req, res, next) {
    const errors = await new (0, _youch2.default)(err, req).toJSON();
    console.log(errors);

    if (res.headersSent) {
      return next(errors);
    }
    return res.status(500).json(errors);
  }
}

exports. default = new App().server;
