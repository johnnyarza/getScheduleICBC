"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _AppointmentController = require('./app/controllers/AppointmentController'); var _AppointmentController2 = _interopRequireDefault(_AppointmentController);

const routes = new (0, _express.Router)();
routes.get('/', _AppointmentController2.default.index);

exports. default = routes;
