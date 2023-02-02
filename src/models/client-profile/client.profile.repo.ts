import {
  ClientProfileModel,
  ClientProfileOptional
} from './client.profile.schema';
import { ClientProfile } from '@/types/dto/client.profile.dto';

const create = async (data: ClientProfile) => {
  const newUser = new ClientProfileModel({
    ...data,
    createdAt: new Date(),
    modifiedAt: new Date()
  });

  await newUser.save();

  return newUser;
};

const findOne = async (data: ClientProfileOptional) => {
  return await ClientProfileModel.findOne({ ...data });
};

const findOneById = async (id: string) => {
  return await ClientProfileModel.findById(id);
};

const update = async (id: string, data: ClientProfileOptional) => {
  await ClientProfileModel.findOneAndUpdate(
    { creatorUserId: id },
    {
      ...data
    }
  );
};

const findMany = async (
  filter: any,
  projection: any
): Promise<Array<ClientProfile>> => {
  try {
    const users = await ClientProfileModel.find(
      { ...filter },
      { ...projection }
    );

    return users.map((u) => {
      return {
        ...u.toObject(),
        id: u.id
      };
    });
  } catch (err) {
    throw err;
  }
};

export default {
  create,
  findOne,
  update,
  findMany,
  findOneById
};
