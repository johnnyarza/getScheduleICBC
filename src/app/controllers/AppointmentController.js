import api from '../services/api';

class AppointmentController {
  async index(req, res, next) {
    try {
      return res.json(await api());
    } catch (error) {
      return next(error);
    }
  }
}

export default new AppointmentController();
