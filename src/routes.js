import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';
import UserController from './app/controllers/UserController';
import RecipientsController from './app/controllers/RecipientsController';
import SessionController from './app/controllers/SessionController';
import courierController from './app/controllers/CouriersController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);
routes.post('/users', UserController.store);
routes.post('/recipients', RecipientsController.store);
routes.post('/sessions', SessionController.store);
routes.get('/couriers', courierController.index);
routes.post('/couriers', courierController.store);

routes.post('/files', upload.single('file'), (req, res) => {
  return res.json({ ok: true });
});

routes.put('/users', authMiddleware, UserController.update);
export default routes;
