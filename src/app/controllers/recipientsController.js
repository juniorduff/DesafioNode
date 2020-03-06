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
      zipCode: Yup.string()
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
      zipCode,
    } = await recepients.create(req.body);

    return res.json({
      id,
      number,
      city,
      complement,
      state,
      zipCode,
    });
    /*
      const schema = Yup.object().shape({
      name: Yup.string().required(),
      number: Yup.number().required(),
      complement: Yup.string().required(),
      city: Yup.string().required(),
      state: Yup.string().required(),
      zipCode: Yup.string()
        .required()
        .min(6),
    });

    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'validation fails' });
    // TENHO QUE PROCURAR SE O USUARIO É ADMIN

    // VERIFICO SE A PESSOA DIGITOU O EMAIL

    // PEGO SOMENTE O ID , NOME , EMAIL , PROVIDER  DO USUARIO CRIADO
    const {
      id,
      number,
      city,
      complement,
      provider,
      state,
      zipCode,
    } = await recepients.create(req.body);
    // RETORNA NA TELA OS DADOS DO USUARIO

    return res.json({
      id,
      number,
      city,
      complement,
      state,
      zipCode,
      provider,
    });
  */
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      number: Yup.number(),
      complement: Yup.string(),
      city: Yup.string(),
      state: Yup.string(),
      zipCode: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'validation fails' });
    }

    // const user = await User.findByPk(req.userId);

    // if (email && email !== user.email) {
    //   const userExists = await User.findOne({ where: { email } });

    //   if (userExists) {
    //     // SE VERDADEIRO INFORMA USUARIO MENSAGEM
    //     return res.status(400).json({ error: 'user already exists' });
    //   }
    // }
    // if (oldPassword && !(await user.checkPassword(oldPassword))) {
    //   return res.status(401).json({ error: 'Password does not match' });
    // }
    const {
      id,
      number,
      city,
      complement,
      provider,
      state,
      zipCode,
    } = await recepients.update(req.body);
    // RETORNA NA TELA OS DADOS DO USUARIO
    return res.json({
      id,
      number,
      city,
      complement,
      state,
      zipCode,
      provider,
    });
  }
}
export default new RecipientsController();
