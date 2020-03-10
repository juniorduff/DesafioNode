import * as Yup from 'yup';
import Couriers from '../models/couriers';

class CouriersController {
  async index(req, res) {
    const couriers = await Couriers.findAll();
    return res.json(couriers);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
    });
    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'validation fails' });

    const { email, name, avatar_id } = await Couriers.create(req.body);

    return res.json({
      email,
      name,
      avatar_id,
    });
  }
}

export default new CouriersController();
