import { PlayerGamesRequestParameters } from '@/types/dto/playergames.dto';
import { PlayeGamesModel } from './playergame';

const createNewPlayGame = async (data: PlayerGamesRequestParameters) => {
  const newPlayerResponse = new PlayeGamesModel({
    ...data,
    createdAt: new Date(),
    modifiedAt: new Date()
  });

  await newPlayerResponse.save();

  return newPlayerResponse;
};

const fetchAllRecords = async () => {
  const fetchAllList = await PlayeGamesModel.find({});
  return fetchAllList;
}

const update = async (data: any) => {
  return PlayeGamesModel.findOneAndUpdate({ playerID: data?.playerID }, { ...data });
};

export default {
  createNewPlayGame,
  fetchAllRecords,
  update
};
