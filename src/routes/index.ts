import { isAuthenticated } from '@/middlewares/auth';
import { Router } from 'express';
import auth from './auth.route';
import client from './client.route';
import playerGames from './playergames.route';

const router = Router();

export default function (app: any) {
  app.use('/api/v1', router);
  router.use(auth);
  router.use(client);
  router.use(playerGames)
}
