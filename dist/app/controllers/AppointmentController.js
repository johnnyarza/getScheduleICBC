"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _api = require('../services/api'); var _api2 = _interopRequireDefault(_api);

class AppointmentController {
  async index(req, res, next) {
    try {
      return res.json(await _api2.default.call(void 0, ));
    } catch (error) {
      return next(error);
    }
  }
}

exports. default = new AppointmentController();
