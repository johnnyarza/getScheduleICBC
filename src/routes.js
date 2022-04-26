import { Router } from 'express';
import AppointmentController from './app/controllers/AppointmentController';

const routes = new Router();
routes.get('/', AppointmentController.index);

export default routes;
