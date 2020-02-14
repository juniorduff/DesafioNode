import User from '../models/User';

class UserController {
  async store(req, res) {
    // PROCURO O USUARIO COM EMAIL QUE ESTÁ SENDO CADASTRADO
    const userExists = await User.findOne({ where: { email: req.body.email } });
    // VERIFICO SE A PESSOA DIGITOU O EMAIL
    if (userExists) {
      // SE VERDADEIRO INFORMA USUARIO MENSAGEM
      return res.status(400).json({ error: 'user already exists' });
    }
    // PEGO SOMENTE O ID , NOME , EMAIL , PROVIDER  DO USUARIO CRIADO
    const { id, name, email, provider } = await User.create(req.body);
    // RETORNA NA TELA OS DADOS DO USUARIO
    return res.json({
      id,
      name,
      email,
      provider,
    });
  }

  async update(req, res) {
    const { email, oldPassword } = req.body;

    const user = await User.findByPk(req.userId);

    if (email && email !== user.email) {
      const userExists = await User.findOne({ where: { email } });

      if (userExists) {
        // SE VERDADEIRO INFORMA USUARIO MENSAGEM
        return res.status(400).json({ error: 'user already exists' });
      }
    }
    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(401).json({ error: 'Password does not match' });
    }
    const { id, name, provider } = await user.update(req.body);
    return res.json({
      id,
      name,
      email,
      provider,
    });
  }
}
export default new UserController();
