import { PlayerGamesRequestParameters } from '@/types/dto/playergames.dto';
import { ClientProfileOptional, PlayeGamesModel } from './playergame';

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

const update = async (id: string, data: any) => {

  console.log(" main id", id )
  console.log(" main data ", data )
  return PlayeGamesModel.findOneAndUpdate({ playerID: id }, { ...data });
};

export default {
  createNewPlayGame,
  fetchAllRecords,
  update
};
