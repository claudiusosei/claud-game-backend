import { createNewPlayRoom, fetchAllPlayersList, updatePlayerDetails } from '@/controller/player.controller';
import { Router } from 'express';

const playerGames = Router();

playerGames.post('/playersgame/create', createNewPlayRoom);

playerGames.get('/playersgame/getAllPlayersDetails', fetchAllPlayersList)

playerGames.post('/playersgame/updatePlayerDetails', updatePlayerDetails)

export default playerGames;
