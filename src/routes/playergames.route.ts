import { createNewPlayRoom, fetchAllPlayersList } from '@/controller/player.controller';
import { Router } from 'express';

const playerGames = Router();

playerGames.post('/playersgame/create', createNewPlayRoom);

playerGames.get('/playersgame/getAllPlayersDetails', fetchAllPlayersList)

export default playerGames;
