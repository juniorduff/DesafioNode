import * as Yup from 'yup';
import recepients from '../models/recipients';

class RecipientsController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      number: Yup.number().required(),
      complement: Yup.string().required(),
      city: Yup.string().required(),
      state: Yup.string().required(),
      zipcode: Yup.string()
        .required()
        .min(6),
    });
    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'validation fails' });

    const {
      id,
      number,
      city,
      complement,
      state,
      zipcode,
    } = await recepients.create(req.body);

    return res.json({
      id,
      number,
      city,
      complement,
      state,
      zipcode,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      number: Yup.number(),
      complement: Yup.string(),
      city: Yup.string(),
      state: Yup.string(),
      zipcode: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'validation fails' });
    }

    const {
      id,
      number,
      city,
      complement,
      provider,
      state,
      zipcode,
    } = await recepients.update(req.body);
    // RETORNA NA TELA OS DADOS DO USUARIO
    return res.json({
      id,
      number,
      city,
      complement,
      state,
      zipcode,
      provider,
    });
  }
}
export default new RecipientsController();
