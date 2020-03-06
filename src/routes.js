import { Router } from 'express';
import UserController from './app/controllers/UserController';
import RecipientsController from './app/controllers/recipientsController';
import SessionController from './app/controllers/sessionController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/recipients', RecipientsController.store);
routes.post('/sessions', SessionController.store);
routes.put('/users', authMiddleware, UserController.update);
export default routes;
