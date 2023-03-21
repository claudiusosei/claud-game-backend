import { Router } from 'express';
import playerGames from './playergames.route';

const router = Router();

export default function (app: any) {
  app.use('/api/v1', router);
  router.use(playerGames)
}
