import { Router } from 'express';
// import UserController from './app/controllers/UserController';
import User from './app/model/User';

const routes = new Router();
routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'teste',
    email: 'teste@teste.com.br',
    password_hash: '12345',
  });

  return res.json(user);
});

export default routes;
